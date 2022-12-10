<template>
  <div class="about">
    <div>
      <ul>
        <li>
          <a
            href="https://support.crowdin.com/"
            target="_blank"
            rel="noopener"
            >{{ $t("documentation") }}</a
          >
        </li>
        <li>
          <a
            href="https://developer.crowdin.com/"
            target="_blank"
            rel="noopener"
            >{{ $t("developer") }}</a
          >
        </li>
        <li>
          <a href="https://demo.crowdin.com/" target="_blank" rel="noopener">{{
            $t("crowdinDemo")
          }}</a>
        </li>
        <li>
          <a href="https://store.crowdin.com/" target="_blank" rel="noopener">{{
            $t("marketplace")
          }}</a>
        </li>
        <li>
          <a
            href="https://community.crowdin.com/"
            target="_blank"
            rel="noopener"
            >{{ $t("community") }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
