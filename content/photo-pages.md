---
pagination:
  data: photos
  size: 1
  alias: photo
  resolve: values
permalink: "photo/{{ photo.name | slugify }}/"
---

{% css %}
  .photo__album-breadcrumb {
    padding-bottom: 1em;
  }

  .photo__album-navigation {
    display: flex;
    flex-direction: row;
    padding-bottom: 1em;
  }

  .photo__album-navigation a {
    width: 100%;
  }

  .photo__album-navigation--next {
    text-align: right;
  }
{% endcss %}

<div class="photo__album-breadcrumb">
  <a href="/album/{{ photo.album | slugify }}/">
    < {{ photo.album }}
  </a>
</div>

<div class="photo__album-navigation">
  {%- if pagination.page.previous.album === photo.album and pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">
      < Previous
    </a>
  {%- endif %}

  {%- if pagination.page.next.album === photo.album and pagination.href.next %}
    <a class="photo__album-navigation--next" href="{{ pagination.href.next }}">
      Next >
    </a>
  {%- endif %}
</div>

<img src="{{ environment.mediaURL }}/{{ photo.file }}" />

{{ photo.name }}

{{ photo.detail }}
