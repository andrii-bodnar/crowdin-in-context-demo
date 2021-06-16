<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="uk">Ukrainian</option>
      <option value="ach">In-Context</option>
    </select>
  </div>
</template>