<template>
  <div class="chat-container">
    <div class="link-preview">
      <div v-if="linkdata && linkdata.image" class="preview-image">
        <img :src="linkdata.image || placeholderImage" alt="Preview" />
      </div>
      <div v-else class="preview-image">
        <img :src="placeholderImage" alt="Preview" />
      </div>
      <div class="preview-content">
        <p class="preview-title">{{ linkdata ? linkdata.title : '' }}</p>
        <p class="preview-description">{{ linkdata ? linkdata.description : '' }}</p>
      </div>
    </div>
    <a class="message-box">
      {{  linkdata ? linkdata.url : '' }}
    </a>
  </div>
</template>

<script>
import Letter from 'vue-letter';

export default {
  components: { Letter },
  props: {
    message: {
      type: String,
      required: true,

    },
  },
  data() {
    return {
      showQuotedContent: false,
      linkdata:null,
      placeholderImage:'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
    };
  },
  created() {
    this.fetchmetas(this.message);
  },
  computed: {
    
  },
  methods: {
    toggleQuotedContent() {
      this.showQuotedContent = !this.showQuotedContent;
    },
    async fetchmetas(url) {
      try {
        const metadata = await axios.get(`https://bot.lifeel.in/get_preview?url=${url}`);
          // res = metadata.data;
        this.linkdata = metadata.data
      } catch (error) {
        console.error("errrrrr");
      }
    }
  },
};
</script>

<style>
.chat-container {
  background-color: #fff;
  padding: 10px;
}

.message-container {
  display: flex;
  margin-bottom: 10px;
}

.link-preview {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
}

.preview-image {
  flex: 0 0 auto;
  width: 80px;
  height: 80px;
  overflow: hidden;
}

.preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-content {
  flex: 1 1 auto;
  margin-left: 10px;
  color:grey;
}

.preview-title {
  font-weight: bold;
  margin-top: 0;
}

.preview-description {
  margin-bottom: 0;
}
</style>
