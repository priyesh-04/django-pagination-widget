# Django Pagination Widget

[![PyPI version](https://badge.fury.io/py/django-pagination-widget.svg)](https://pypi.org/project/django-pagination-widget/)
[![Django Versions](https://img.shields.io/badge/Django-3.2%2B-blue.svg)](https://www.djangoproject.com/)
[![Python Versions](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, reusable Django pagination component with clean styling and interactive JavaScript behavior. Features smart ellipsis logic, responsive design, and accessibility support with zero external dependencies.

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

### `pagination_widget`

Renders the complete pagination component.

```html
{% pagination_widget page_obj page_range %}
```

**Parameters:**
- `page_obj`: Django's Page object (required)
- `page_range`: List of page numbers to display (optional)

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

## 🎨 Customization

### CSS Variables

Override these variables to customize the appearance:

```css
:root {
    --pagination-primary: #007bff;
    --pagination-success: #28a745;
    --pagination-text: #666;
    --pagination-border: #e1e5e9;
    --pagination-bg: #fff;
}
```

### Custom Styling

Create your own CSS file and load it after the default styles:

```html
<link rel="stylesheet" href="{% static 'django_pagination_widget/css/pagination.css' %}">
<link rel="stylesheet" href="{% static 'my_app/css/custom-pagination.css' %}">
```

## 🔧 Configuration

### Settings

Add these to your Django settings for customization:

```python
# settings.py

# Pagination Widget Settings
PAGINATION_WIDGET = {
    'ENABLE_DARK_THEME': True,
}
```

## 📱 Responsive Design

The component automatically adapts to different screen sizes:

- **Desktop**: Full pagination with ellipsis
- **Tablet**: Condensed layout
- **Mobile**: Simplified navigation

## 🌙 Dark Theme Support

Automatic dark theme detection using `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
    /* Automatic dark theme styles */
}
```

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 🧪 Testing

```bash
# Run tests
python -m pytest

# Run with coverage
python -m pytest --cov=django_pagination_widget
```

## 📦 Development

### Setup Development Environment

```bash
git clone https://github.com/yourusername/django-pagination-widget.git
cd django-pagination-widget
pip install -e .
pip install -r requirements-dev.txt
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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Django framework

## 📞 Support

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/django-pagination-widget/issues)
- 📖 Documentation: [Read the Docs](https://django-pagination-widget.readthedocs.io/)

---

Made with ❤️ for the Django community
