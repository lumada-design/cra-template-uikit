import React from "react";
import { useTranslation } from "react-i18next";
import {
  HvGrid,
  HvTypography,
  HvGlobalActions,
} from "@hitachivantara/uikit-react-core";

import { Container } from "components/layout";

const Projects: React.FC = () => {
  const { t } = useTranslation("projects");

  return (
    <Container>
      <HvGrid container>
        <HvGrid item xs={12}>
          <HvTypography variant="mTitle">{t("page.title")}</HvTypography>
        </HvGrid>
      </HvGrid>
      <HvGrid container>
        <HvGrid item xs={12}>
          <HvGlobalActions title={t("section.title")} variant="section" />
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default Projects;
