<template>
  <iframe
    class="embeddable-iframe"
    :src="url"
    :width="width"
    :height="height"
  ></iframe>
</template>

<script>
import * as Base64 from 'js-base64';

export default {
  name: 'Embeddable',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    language: {
      type: String,
      default: 'typescript',
    },
    code: {
      type: String,
      default: '// Start here...',
    },
    sourceURL: {
      type: String,
    },
    lineNumbers: {
      type: String,
      default: 'on',
    },
    wordWrap: {
      type: String,
      default: 'on',
    },
    scrollbar: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    url: function () {
      let language = this.language;
      let code = Base64.encode(this.code);
      if (this.sourceURL) {
        let url = new URL(this.sourceURL);
        language = url.searchParams.get('lang');
        code = url.searchParams.get('code');
      }
      let newURL = new URL(
        `https://embeddable.vercel.app/?lang=${encodeURIComponent(
          language,
        )}&code=${encodeURIComponent(code)}`,
      );
      newURL.searchParams.set('line_numbers', this.lineNumbers);
      newURL.searchParams.set('word_wrap', this.wordWrap);
      newURL.searchParams.set('scrollbar', this.scrollbar);
      return newURL.toString();
    },
  },
};
</script>

<style>
.embeddable-iframe {
  border-radius: 7px;
  padding: 5px;
  background-color: #1e1e1e;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
