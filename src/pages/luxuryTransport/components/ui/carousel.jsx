"use client";

import React, { useState, useEffect, useCallback, createContext, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styled from "styled-components";
import { Button } from "./button"; // MUI yoki styled button

// Carousel Context
const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

function Carousel({ 
  orientation = "horizontal", 
  opts, 
  setApi, 
  plugins, 
  className, 
  children, 
  ...props 
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <CarouselWrapper
        onKeyDownCapture={handleKeyDown}
        className={className}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </CarouselWrapper>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <ContentWrapper ref={carouselRef} orientation={orientation}>
      <InnerContent orientation={orientation} className={className} {...props} />
    </ContentWrapper>
  );
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();

  return (
    <ItemWrapper orientation={orientation} className={className} {...props} />
  );
}

function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <StyledButton
      variant={variant}
      size={size}
      orientation={orientation}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={className}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </StyledButton>
  );
}

function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <StyledButton
      variant={variant}
      size={size}
      orientation={orientation}
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={className}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </StyledButton>
  );
}

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
`;

const InnerContent = styled.div`
  display: flex;
  ${({ orientation }) =>
    orientation === "horizontal" ? `margin-left: -1rem;` : `margin-top: -1rem; flex-direction: column;`}
`;

const ItemWrapper = styled.div`
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
  ${({ orientation }) =>
    orientation === "horizontal" ? `padding-left: 1rem;` : `padding-top: 1rem;`}
`;

const StyledButton = styled(Button)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;

  ${({ orientation }) =>
    orientation === "horizontal"
      ? `top: 50%; transform: translateY(-50%);`
      : `left: 50%; transform: translateX(-50%) rotate(90deg);`}

  ${({ orientation }) =>
    orientation === "horizontal"
      ? `&[data-slot="carousel-previous"] { left: -3rem; } 
         &[data-slot="carousel-next"] { right: -3rem; }`
      : `&[data-slot="carousel-previous"] { top: -3rem; } 
         &[data-slot="carousel-next"] { bottom: -3rem; }`}
`;

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
