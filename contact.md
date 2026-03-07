---
layout: page
title: Contact
permalink: /contact/
---

## Contact Information

**{{ site.data.contact.name }}**<br>
{{ site.data.contact.affiliation.position }}<br>
{{ site.data.contact.affiliation.department }}<br>
{{ site.data.contact.affiliation.institution }}

{% if site.data.contact.office %}
**Office:** {{ site.data.contact.office }}<br>
{% endif %}

**Email:** [{{ site.data.contact.email }}](mailto:{{ site.data.contact.email }})

{% if site.data.contact.address.city %}
**Address:**<br>
{% if site.data.contact.address.street %}{{ site.data.contact.address.street }}<br>{% endif %}
{{ site.data.contact.address.city }}{% if site.data.contact.address.postal_code %}, {{ site.data.contact.address.postal_code }}{% endif %}<br>
{{ site.data.contact.address.country }}
{% endif %}

{% if site.data.contact.contact_note %}
{{ site.data.contact.contact_note }}
{% endif %}

## Find Me On

{% if site.data.contact.social.google_scholar %}
- [Google Scholar]({{ site.data.contact.social.google_scholar }})
{% endif %}
{% if site.data.contact.social.researchgate %}
- [ResearchGate]({{ site.data.contact.social.researchgate }})
{% endif %}
{% if site.data.contact.social.orcid %}
- [ORCID]({{ site.data.contact.social.orcid }})
{% endif %}
{% if site.data.contact.social.github %}
- [GitHub]({{ site.data.contact.social.github }})
{% endif %}
{% if site.data.contact.social.linkedin %}
- [LinkedIn]({{ site.data.contact.social.linkedin }})
{% endif %}
{% if site.data.contact.social.twitter %}
- [Twitter/X]({{ site.data.contact.social.twitter }})
{% endif %}

{% if site.data.research.open_to_collaboration %}
## Collaboration

I am always open to research collaborations and discussions. If you're interested in working together, feel free to reach out!
{% endif %}
