---
layout: page
title: Curriculum Vitae
permalink: /cv/
---

## Education

{% for edu in site.data.education.education %}
<div class="timeline-item">
  <h3>{{ edu.degree }} in {{ edu.major }}</h3>
  <div class="meta">
    {{ edu.institution }} | {{ edu.location }} | {{ edu.start_date }} - {{ edu.end_date }}
  </div>
  {% if edu.thesis %}
  <p><strong>Thesis:</strong> {{ edu.thesis }}</p>
  {% endif %}
  {% if edu.advisor %}
  <p><strong>Advisor:</strong> {{ edu.advisor }}</p>
  {% endif %}
  {% if edu.gpa %}
  <p><strong>GPA:</strong> {{ edu.gpa }}</p>
  {% endif %}
  {% if edu.honors %}
  <p><strong>Honors:</strong></p>
  <ul>
    {% for honor in edu.honors %}
    <li>{{ honor }}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}

## Research Experience

{% for exp in site.data.experience.academic_experience %}
<div class="timeline-item">
  <h3>{{ exp.title }}</h3>
  <div class="meta">
    {{ exp.organization }} | {{ exp.location }} | {{ exp.start_date }} - {{ exp.end_date }}
  </div>
  {% if exp.description %}
  <ul>
    {% for desc in exp.description %}
    <li>{{ desc }}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}

## Industry Experience

{% for exp in site.data.experience.industry_experience %}
<div class="timeline-item">
  <h3>{{ exp.title }}</h3>
  <div class="meta">
    {{ exp.organization }} | {{ exp.location }} | {{ exp.start_date }} - {{ exp.end_date }}
  </div>
  {% if exp.description %}
  <ul>
    {% for desc in exp.description %}
    <li>{{ desc }}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}

## Teaching Experience

{% for exp in site.data.experience.teaching_experience %}
<div class="timeline-item">
  <h3>{{ exp.title }} - {{ exp.course }}</h3>
  <div class="meta">
    {{ exp.organization }} | {{ exp.semester }}
  </div>
  {% if exp.description %}
  <ul>
    {% for desc in exp.description %}
    <li>{{ desc }}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}

## Awards & Honors

{% for award in site.data.awards.awards %}
{% if award.highlight %}
<div class="highlight">
{% else %}
<div>
{% endif %}
  <strong>{{ award.title }}</strong> - {{ award.organization }} ({{ award.year }})
  {% if award.description %}
  <br>{{ award.description }}
  {% endif %}
</div>
{% endfor %}

## Professional Service

{% for service in site.data.awards.professional_service %}
- <strong>{{ service.role }}</strong>, {{ service.venue }} ({{ service.year }})
{% endfor %}

## Memberships

{% for membership in site.data.awards.memberships %}
- {{ membership.organization }} - {{ membership.type }} ({{ membership.year }})
{% endfor %}

---

**[Download Full CV (PDF)](/files/cv.pdf)** (Coming soon)
