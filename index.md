---
layout: home
title: Home
---

# {{ site.data.contact.name }}

{{ site.data.contact.affiliation.position }} at {{ site.data.contact.affiliation.institution }}

## About Me

{{ site.data.research.research_summary }}

## Research Interests

{% for interest in site.data.research.research_interests %}
- {{ interest }}
{% endfor %}

## Quick Links

- [Full CV]({{ "/cv/" | relative_url }})
- [Research]({{ "/research/" | relative_url }})
- [Publications]({{ "/publications/" | relative_url }})
- [Contact]({{ "/contact/" | relative_url }})

## Recent News

- [Add your recent news here]
- [Conference presentations, awards, etc.]

## Contact

Email: [{{ site.data.contact.email }}](mailto:{{ site.data.contact.email }})

{% if site.data.contact.social %}
## Find Me On

{% if site.data.contact.social.google_scholar %}
- [Google Scholar]({{ site.data.contact.social.google_scholar }})
{% endif %}
{% if site.data.contact.social.github %}
- [GitHub]({{ site.data.contact.social.github }})
{% endif %}
{% endif %}
