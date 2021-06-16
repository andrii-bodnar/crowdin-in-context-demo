<template>
  <div class="content">
    <h1>{{ $t("welcomeMessage") }}</h1>
    <p>
      {{ $t("description.part1") }}
    </p>
    <p>
      {{ $t("description.part2") }}
    </p>
    <p>
      {{ $t("description.part3") }}
    </p>

    <h3>{{ $t("headings.technicalOverview") }}</h3>
    <p>
      {{ $t("description.part4") }}
    </p>

    <h3>{{ $t("headings.integration") }}</h3>
    <p>
      {{ $t("description.part5") }}
    </p>
    <ul>
      <li>{{ $t("integration.way1") }}</li>
      <li>{{ $t("integration.way2") }}</li>
    </ul>

    <h3>{{ $t("essentialLinks") }}</h3>
    <ul>
      <li><a href="https://support.crowdin.com/in-context-localization/" target="_blank" rel="noopener">{{ $t("documentation") }}</a></li>
      <li><a href="https://demo.crowdin.com/" target="_blank" rel="noopener">{{ $t("crowdinDemo") }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.content {
  max-width: 700px;
  margin: auto;
}

p {
  text-align: justify;
}
</style>
