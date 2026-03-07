---
layout: page
title: Publications
permalink: /publications/
---

## Journal Articles

{% for paper in site.data.publications.journal_papers %}
{% if paper.highlight %}
<div class="highlight">
{% else %}
<div>
{% endif %}
  <strong>{{ paper.title }}</strong><br>
  {{ paper.authors }}<br>
  <em>{{ paper.venue }}</em>, {{ paper.year }}{% if paper.volume %}, {{ paper.volume }}{% endif %}{% if paper.issue %}({{ paper.issue }}){% endif %}{% if paper.pages %}: {{ paper.pages }}{% endif %}.<br>
  {% if paper.doi %}[DOI]({{ paper.doi }}) {% endif %}{% if paper.pdf %}[PDF]({{ paper.pdf }}) {% endif %}{% if paper.code %}[Code]({{ paper.code }}) {% endif %}
</div>
{% endfor %}

## Conference Papers

{% for paper in site.data.publications.conference_papers %}
{% if paper.highlight %}
<div class="highlight">
{% else %}
<div>
{% endif %}
  <strong>{{ paper.title }}</strong><br>
  {{ paper.authors }}<br>
  <em>{{ paper.venue }}</em>, {{ paper.year }}{% if paper.pages %}, pp. {{ paper.pages }}{% endif %}.<br>
  {% if paper.pdf %}[PDF]({{ paper.pdf }}) {% endif %}{% if paper.slides %}[Slides]({{ paper.slides }}) {% endif %}{% if paper.poster %}[Poster]({{ paper.poster }}) {% endif %}{% if paper.code %}[Code]({{ paper.code }}) {% endif %}
</div>
{% endfor %}

## Preprints

{% for paper in site.data.publications.preprints %}
{% if paper.highlight %}
<div class="highlight">
{% else %}
<div>
{% endif %}
  <strong>{{ paper.title }}</strong><br>
  {{ paper.authors }}, {{ paper.year }}.<br>
  {% if paper.arxiv %}[arXiv]({{ paper.arxiv }}) {% endif %}{% if paper.pdf %}[PDF]({{ paper.pdf }}) {% endif %}
</div>
{% endfor %}

## Theses

{% for thesis in site.data.publications.theses %}
<div>
  <strong>{{ thesis.title }}</strong><br>
  {{ thesis.degree }}, {{ thesis.institution }}, {{ thesis.year }}.<br>
  {% if thesis.pdf %}[PDF]({{ thesis.pdf }}){% endif %}
</div>
{% endfor %}

## Book Chapters

{% for chapter in site.data.publications.book_chapters %}
<div>
  <strong>{{ chapter.title }}</strong><br>
  {{ chapter.authors }}<br>
  In <em>{{ chapter.book }}</em>, {{ chapter.publisher }}, {{ chapter.year }}{% if chapter.pages %}, pp. {{ chapter.pages }}{% endif %}.<br>
  {% if chapter.doi %}[DOI]({{ chapter.doi }}){% endif %}
</div>
{% endfor %}

---

**Full publication list:** [Google Scholar]({{ site.data.contact.social.google_scholar }})
