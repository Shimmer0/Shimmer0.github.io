---
layout: page
title: Research
permalink: /research/
---

## Research Summary

{{ site.data.research.research_summary }}

## Research Interests

{% for interest in site.data.research.research_interests %}
- {{ interest }}
{% endfor %}

## Research Projects

{% for project in site.data.research.projects %}
<div class="project-item">
  <h3>{{ project.name }}</h3>
  <p><strong>Role:</strong> {{ project.role }}</p>
  <p><strong>Period:</strong> {{ project.period }}</p>
  {% if project.funder %}
  <p><strong>Funder:</strong> {{ project.funder }} {% if project.amount %}({{ project.amount }}){% endif %}</p>
  {% endif %}
  <p>{{ project.description }}</p>
  {% if project.collaborators %}
  <p><strong>Collaborators:</strong> {{ project.collaborators | join: ", " }}</p>
  {% endif %}
</div>
{% endfor %}

{% if site.data.research.open_to_collaboration %}
## Collaboration

{{ site.data.research.collaboration_note }}
{% endif %}
