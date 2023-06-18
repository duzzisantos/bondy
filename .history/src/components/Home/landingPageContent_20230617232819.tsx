import React from "react";
import {
  Gear,
  GearWideConnected,
  WrenchAdjustableCircleFill,
  Fan,
} from "react-bootstrap-icons";
export const servicesList = [
  {
    id: 1,
    category: "Suspension Systems",
    icon: <Gear />,
  },
  {
    id: 2,
    category: "Brake Service",
    icon: <GearWideConnected />,
  },
  {
    id: 3,
    category: "Wheel Service",
    icon: <WrenchAdjustableCircleFill />,
  },
  {
    id: 4,
    category: "Airconditioning & Heating",
    icon: <Fan />,
  },
];
