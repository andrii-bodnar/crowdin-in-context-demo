<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ $t("headings.about") }}</template>
    <p>{{ $t("description.part1") }}</p>
    <br />
    <p>{{ $t("description.part3") }}</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ $t("headings.technicalOverview") }}</template>
    <p>{{ $t("description.part4") }}</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ $t("headings.integration") }}</template>
    <p>{{ $t("description.part5") }}</p>
    <ul>
      <li>{{ $t("integration.way1") }}</li>
      <li>{{ $t("integration.way2") }}</li>
    </ul>
  </WelcomeItem>
</template>
