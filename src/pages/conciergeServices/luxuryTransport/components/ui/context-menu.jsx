"use client";

import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import styled from "styled-components";

// 📌 Styled components
const SubTriggerStyled = styled(ContextMenuPrimitive.SubTrigger)`
  display: flex;
  cursor: default;
  align-items: center;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 14px;
  outline: none;
  user-select: none;

  &[data-state="open"] {
    background: var(--accent);
    color: var(--accent-foreground);
  }

  &:focus {
    background: var(--accent);
    color: var(--accent-foreground);
  }
`;

const SubContentStyled = styled(ContextMenuPrimitive.SubContent)`
  background: var(--popover);
  color: var(--popover-foreground);
  min-width: 8rem;
  border-radius: 6px;
  padding: 4px;
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const ContentStyled = styled(ContextMenuPrimitive.Content)`
  background: var(--popover);
  color: var(--popover-foreground);
  min-width: 8rem;
  border-radius: 6px;
  padding: 4px;
  box-shadow: var(--shadow);
  max-height: var(--radix-context-menu-content-available-height);
  overflow-y: auto;
`;

const ItemStyled = styled(ContextMenuPrimitive.Item)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  user-select: none;

  &[data-variant="destructive"] {
    color: var(--destructive);
  }

  &:focus {
    background: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const CheckboxItemStyled = styled(ContextMenuPrimitive.CheckboxItem)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;
  padding: 6px 8px 6px 28px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  user-select: none;

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const RadioItemStyled = styled(ContextMenuPrimitive.RadioItem)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;
  padding: 6px 8px 6px 28px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  user-select: none;

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const LabelStyled = styled(ContextMenuPrimitive.Label)`
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
`;

const SeparatorStyled = styled(ContextMenuPrimitive.Separator)`
  height: 1px;
  margin: 4px 0;
  background: var(--border);
`;

const ShortcutStyled = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: var(--muted-foreground);
  letter-spacing: 0.05em;
`;

// 📌 Components
function ContextMenu(props) {
  return <ContextMenuPrimitive.Root {...props} />;
}

function ContextMenuTrigger(props) {
  return <ContextMenuPrimitive.Trigger {...props} />;
}

function ContextMenuGroup(props) {
  return <ContextMenuPrimitive.Group {...props} />;
}

function ContextMenuPortal(props) {
  return <ContextMenuPrimitive.Portal {...props} />;
}

function ContextMenuSub(props) {
  return <ContextMenuPrimitive.Sub {...props} />;
}

function ContextMenuRadioGroup(props) {
  return <ContextMenuPrimitive.RadioGroup {...props} />;
}

function ContextMenuSubTrigger({ children, ...props }) {
  return (
    <SubTriggerStyled {...props}>
      {children}
      <ChevronRightIcon style={{ marginLeft: "auto" }} />
    </SubTriggerStyled>
  );
}

function ContextMenuSubContent(props) {
  return <SubContentStyled {...props} />;
}

function ContextMenuContent(props) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContentStyled {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem(props) {
  return <ItemStyled {...props} />;
}

function ContextMenuCheckboxItem({ children, checked, ...props }) {
  return (
    <CheckboxItemStyled checked={checked} {...props}>
      <span
        style={{
          position: "absolute",
          left: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "14px",
          height: "14px",
        }}
      >
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon size={14} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </CheckboxItemStyled>
  );
}

function ContextMenuRadioItem({ children, ...props }) {
  return (
    <RadioItemStyled {...props}>
      <span
        style={{
          position: "absolute",
          left: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "14px",
          height: "14px",
        }}
      >
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon size={10} fill="currentColor" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </RadioItemStyled>
  );
}

function ContextMenuLabel(props) {
  return <LabelStyled {...props} />;
}

function ContextMenuSeparator(props) {
  return <SeparatorStyled {...props} />;
}

function ContextMenuShortcut(props) {
  return <ShortcutStyled {...props} />;
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
