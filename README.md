# Django Pagination Widget

![CI](https://github.com/priyesh-04/django-pagination-widget/actions/workflows/ci.yml/badge.svg)

[![PyPI version](https://badge.fury.io/py/django-pagination-widget.svg)](https://pypi.org/project/django-pagination-widget/)
[![Django Versions](https://img.shields.io/badge/Django-4.2%E2%80%935.2-blue.svg)](https://www.djangoproject.com/)
[![Python Versions](https://img.shields.io/badge/Python-3.8%E2%80%933.13-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, reusable Django pagination component with clean styling and interactive JavaScript behavior. Features smart ellipsis logic, responsive design, and accessibility support with zero external dependencies. Tested on Django 4.2, 5.0, 5.1, 5.2 across Python 3.8–3.13.

## Supported versions

- Django: 4.2 (LTS), 5.0, 5.1, 5.2 (LTS)
- Python: 3.8, 3.9, 3.10, 3.11, 3.12, 3.13

## ✨ Features

- 🎨 **Zero Dependencies**: No external libraries required
- ⚡ **Vanilla JavaScript**: Lightweight, modern implementation
- 📱 **Responsive**: Mobile-friendly design with dark theme support
- ♿ **Accessible**: ARIA labels and semantic HTML with inline SVG icons
- 🎯 **Easy Integration**: Simple template tags and configuration
- 🔧 **Customizable**: CSS variables and easy theming
- 🚀 **Lightweight**: Minimal footprint with inline SVG icons

## 🚀 Quick Start

### 1. Installation

```bash
pip install django-pagination-widget
```

### 2. Add to Django Settings

```python
# settings.py
INSTALLED_APPS = [
    # ... other apps
    'django_pagination_widget',
]
```

### 3. Usage in Templates

```html
{% load pagination_tags %}

<!-- Basic usage -->
{% pagination_widget page_obj %}

<!-- With custom page range -->
{% pagination_widget page_obj custom_page_range %}

<!-- Manual inclusion (alternative) -->
{% include 'django_pagination_widget/pagination.html' %}
```

Note: the included template already links the core CSS and JS. If you prefer to load assets once (e.g., in base.html), use the tags below in your layout and then call only the widget where needed:

```html
{% load pagination_tags %}
<!-- In base.html head -->
{% pagination_css %}
{% pagination_js %}
<!-- Later in a page template -->
{% pagination_widget page_obj %}

You can also opt into a “bare” render that skips auto-including assets:

```html
{% pagination_widget page_obj include_assets=False %}
```

To make “bare” the global default, add this to your settings:

```python
PAGINATION_WIDGET = {
    "INCLUDE_ASSETS_BY_DEFAULT": False,
}
```
```

### 4. Usage in Views

```python
from django.core.paginator import Paginator
from django.shortcuts import render

def my_view(request):
    objects = MyModel.objects.all()
    paginator = Paginator(objects, 10)  # 10 items per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'my_template.html', {
        'page_obj': page_obj,
    })
```

## 📖 Template Tags

### `pagination_custom_css`

Returns a CSS link tag for custom pagination styling.

```html
{% pagination_custom_css 'my_app/css/pagination_widget.css' %}
```

**Parameters:**
- `custom_css_path`: Path to custom CSS file relative to static root (optional)

You can also reference a non-app-namespaced path under your STATICFILES dirs, e.g.:

```html
{% pagination_custom_css 'css/pagination_widget.css' %}
```

### `pagination_widget`

Renders the complete pagination component with automatic CSS and JS inclusion.

```html
{% pagination_widget page_obj page_range %}
```

**Parameters:**
- `page_obj`: Django's Page object (required)
- `page_range`: List of page numbers to display (optional)
- `include_assets`: bool to control whether the widget includes its CSS/JS. Defaults to True or to settings.PAGINATION_WIDGET['INCLUDE_ASSETS_BY_DEFAULT'] if provided.

### `pagination_css`

Returns CSS link tag for manual inclusion.

```html
{% pagination_css %}
```

### `pagination_js`

Returns JavaScript script tag for manual inclusion.

```html
{% pagination_js %}
```

### Custom CSS Integration

Create a custom CSS file and include it:

```html
<!-- In your template -->
{% load pagination_tags %}
{% pagination_custom_css 'my_app/css/pagination_widget.css' %}
{% pagination_widget page_obj %}
```

## Responsive Design

The component automatically adapts to different screen sizes:

- **Desktop**: Full pagination with ellipsis
- **Tablet**: Condensed layout
- **Mobile**: Simplified navigation

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 🧪 Testing

```bash
# From the package directory
cd django_pagination_widget

# Run tests
python -m pytest

# Run with coverage
python -m pytest --cov=django_pagination_widget
```

## 📦 Development

### Setup Development Environment

```bash
git clone https://github.com/priyesh-04/django-pagination-widget.git
cd django-pagination-widget
# Work inside the package subdirectory for editable installs
cd django_pagination_widget
pip install -e .
pip install -r requirements-dev.txt
```

### Run the example project locally

The example project installs the local package in editable mode via its `requirements.txt`:

```
-e ../django_pagination_widget
```

Quick start:

```bash
cd ../example_project
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Project Structure

```
django_pagination_widget/
├── django_pagination_widget/
│   ├── static/
│   │   └── django_pagination_widget/
│   │       ├── css/
│   │       └── js/
│   ├── templates/
│   │   └── django_pagination_widget/
│   ├── templatetags/
│   └── __init__.py
├── tests/
├── setup.py
├── README.md
└── LICENSE
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Development Guidelines

- Follow PEP 8 style guidelines
- Add tests for new features
- Update documentation
- Maintain backward compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](django_pagination_widget/LICENSE) file for details.

## 📞 Support

- 📧 Email: [Send Message](priyesh.shukla070@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/priyesh-04/django-pagination-widget/issues)
- 📖 Documentation: [Read the Docs](https://django-pagination-widget.readthedocs.io/)

---

Made with ❤️ for the Django community
