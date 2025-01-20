// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { IEmbeddedCustomStyles } from "../common/types";
import get from "lodash/get";

export const getOverrideColorVariants: (
  customStyles: string,
) => false | IEmbeddedCustomStyles = (customStyles) => {
  try {
    return JSON.parse(atob(customStyles)) as IEmbeddedCustomStyles;
  } catch (e) {
    console.error("Error processing override styles, skipping.", e);
    return false;
  }
};

export const generateOverrideTheme = (
  overrideVars: IEmbeddedCustomStyles | {},
) => {
  let retVal = undefined;

  try {
    retVal = {
      bgColor: "#19191d",
      fontColor: "#f9fafb",
      borderColor: "#39393c",
      bulletColor: "#f9fafb",
      logoColor: "#ff00a0",
      logoLabelColor: "#f9fafb",
      logoLabelInverse: "#FFF",
      loaderColor: "#ff00a0",
      boxBackground: "#1c1c1f",
      mutedText: "#9ca3af",
      secondaryText: "#e5e7eb",
      buttons: {
        regular: {
          enabled: {
            border: "#ff00a0",
            text: "#ff00a0",
            background: "transparent",
            iconColor: "#ff00a0",
          },
          disabled: {
            border: "#9ca3af",
            text: "#9ca3af",
            background: "transparent",
            iconColor: "#9ca3af",
          },
          hover: {
            border: "#e4008e",
            text: "#e4008e",
            background: "transparent",
            iconColor: "#e4008e",
          },
          pressed: {
            border: "#e4008e",
            text: "#e4008e",
            background: "transparent",
            iconColor: "#e4008e",
          },
        },
        callAction: {
          enabled: {
            border: "#ff00a0",
            text: "#f9fafb",
            background: "#ff00a0",
            iconColor: "#f9fafb",
          },
          disabled: {
            border: "#9ca3af",
            text: "#e5e7eb",
            background: "#9ca3af",
            iconColor: "#e5e7eb",
          },
          hover: {
            border: "#e4008e",
            text: "#f9fafb",
            background: "#e4008e",
            iconColor: "#f9fafb",
          },
          pressed: {
            border: "#e4008e",
            text: "#f9fafb",
            background: "#e4008e",
            iconColor: "#f9fafb",
          },
        },
        secondary: {
          enabled: {
            border: "#39393c",
            text: "#e5e7eb",
            background: "transparent",
            iconColor: "#e5e7eb",
          },
          disabled: {
            border: "#9ca3af",
            text: "#9ca3af",
            background: "transparent",
            iconColor: "#9ca3af",
          },
          hover: {
            border: "#ff00a0",
            text: "#ff00a0",
            background: "transparent",
            iconColor: "#ff00a0",
          },
          pressed: {
            border: "#e4008e",
            text: "#e4008e",
            background: "transparent",
            iconColor: "#e4008e",
          },
        },
        text: {
          enabled: {
            border: "transparent",
            text: "#f9fafb",
            background: "transparent",
            iconColor: "#f9fafb",
          },
          disabled: {
            border: "transparent",
            text: "#9ca3af",
            background: "transparent",
            iconColor: "#9ca3af",
          },
          hover: {
            border: "transparent",
            text: "#ff00a0",
            background: "transparent",
            iconColor: "#ff00a0",
          },
          pressed: {
            border: "transparent",
            text: "#e4008e",
            background: "transparent",
            iconColor: "#e4008e",
          },
        },
      },
      login: {
        formBG: "#1c1c1f",
        bgFilter: "blur(10px)",
        promoBG: "#19191d",
        promoHeader: "#f9fafb",
        promoText: "#e5e7eb",
        footerElements: "#ff00a0",
        footerDivider: "#39393c",
      },
      pageHeader: {
        background: "#1c1c1f",
        border: "#39393c",
        color: "#f9fafb",
      },
      tooltip: {
        background: "#1c1c1f",
        color: "#f9fafb",
      },
      commonInput: {
        labelColor: "#f9fafb",
      },
      checkbox: {
        checkBoxBorder: "#39393c",
        checkBoxColor: "#ff00a0",
        disabledBorder: "#9ca3af",
        disabledColor: "#9ca3af",
      },
      iconButton: {
        buttonBG: "#1c1c1f",
        activeBG: "#ff00a0",
        hoverBG: "#e4008e",
        disabledBG: "#9ca3af",
        color: "#f9fafb",
      },
      dataTable: {
        border: "#39393c",
        disabledBorder: "#9ca3af",
        disabledBG: "rgba(156, 163, 175, 0.1)",
        selected: "rgba(255, 0, 160, 0.15)",
        deletedDisabled: "rgba(156, 163, 175, 0.2)",
        hoverColor: "rgba(255, 0, 160, 0.1)",
      },
      backLink: {
        color: "#ff00a0",
        arrow: "#ff00a0",
        hover: "#e4008e",
      },
      inputBox: {
        border: "#39393c",
        hoverBorder: "#ff00a0",
        color: "#f9fafb",
        backgroundColor: "#1c1c1f",
        error: "#ef4444",
        placeholderColor: "#9ca3af",
        disabledBorder: "#9ca3af",
        disabledBackground: "#1c1c1f",
        disabledPlaceholder: "#9ca3af",
        disabledText: "#9ca3af",
      },
      breadcrumbs: {
        border: "#39393c",
        linksColor: "#ff00a0",
        textColor: "#f9fafb",
        backgroundColor: "#1c1c1f",
        backButton: {
          border: "#39393c",
          backgroundColor: "#1c1c1f",
        },
      },
      actionsList: {
        containerBorderColor: "#1c1c1f",
        backgroundColor: "#1c1c1f",
        disabledOptionsTextColor: "#9ca3af",
        optionsBorder: "#39393c",
        optionsHoverTextColor: "#e4008e",
        optionsTextColor: "#ff00a0",
        titleColor: "#f9fafb",
      },
      screenTitle: {
        border: "#39393c",
        subtitleColor: "#e5e7eb",
        iconColor: "#f9fafb",
      },
      modalBox: {
        closeColor: "#f9fafb",
        closeHoverBG: "rgba(255, 0, 160, 0.1)",
        closeHoverColor: "#ff00a0",
        containerColor: "#19191d",
        overlayColor: "rgba(0, 0, 0, 0.5)",
        titleColor: "#f9fafb",
        iconColor: {
          default: "#f9fafb",
          accept: "#22c55e",
          delete: "#ef4444",
        },
      },
      switchButton: {
        bulletBGColor: "#f9fafb",
        bulletBorderColor: "#39393c",
        disabledBulletBGColor: "#9ca3af",
        disabledBulletBorderColor: "#9ca3af",
        offLabelColor: "#e5e7eb",
        onLabelColor: "#f9fafb",
        onBackgroundColor: "#ff00a0",
        switchBackground: "#1c1c1f",
        disabledBackground: "rgba(156, 163, 175, 0.2)",
        disabledOnBackground: "rgba(156, 163, 175, 0.2)",
      },
      dropdownSelector: {
        hoverText: "#e4008e",
        backgroundColor: "#1c1c1f",
        hoverBG: "rgba(255, 0, 160, 0.1)",
        selectedBGColor: "rgba(255, 0, 160, 0.15)",
        selectedTextColor: "#ff00a0",
        optionTextColor: "#f9fafb",
        disabledText: "#9ca3af",
      },
      readBox: {
        borderColor: "#39393c",
        backgroundColor: "#1c1c1f",
        textColor: "#f9fafb",
      },
      menu: {
        vertical: {
          background: "#19191d",
          textColor: "#f9fafb",
          iconBorderColor: "#39393c",
          iconBGColor: "#1c1c1f",
          hoverSelectedIconBorder: "#ff00a0",
          hoverSelectedBackground: "rgba(255, 0, 160, 0.1)",
          hoverSelectedColor: "#e4008e",
          sectionDividerColor: "#39393c",
          notificationColor: "#ff00a0",
          dropArrowBackground: "#1c1c1f",
          dropArrowColor: "#f9fafb",
          menuCollapseColor: "#f9fafb",
          sectionLabelColor: "#9ca3af",
        },
        horizontal: {
          menuHeaderBackground: "#19191d",
          barBackground: "#1c1c1f",
          textColor: "#f9fafb",
          iconBorderColor: "#39393c",
          iconBGColor: "#1c1c1f",
          hoverSelectedIconBorder: "#ff00a0",
          hoverSelectedBackground: "rgba(255, 0, 160, 0.1)",
          hoverSelectedColor: "#e4008e",
          sectionDividerColor: "#39393c",
          notificationColor: "#ff00a0",
          dropArrowBackground: "#1c1c1f",
          dropArrowColor: "#f9fafb",
          dropBackground: "#19191d",
          dropHoverSelectedColor: "#e4008e",
          noOptionsBar: "#1c1c1f",
        },
      },
    };
  } catch (e) {
    console.warn("Invalid theme provided. Fallback to original theme.");
  }

  return retVal;
};

export const isDarkModeOn = () => {
  const darkMode = localStorage.getItem("dark-mode");

  if (!darkMode) {
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    return get(systemDarkMode, "matches", false);
  }

  return darkMode === "on";
};

export const storeDarkMode = (mode: "on" | "off") => {
  localStorage.setItem("dark-mode", mode);
};
