# Example Django Project for Django Pagination Widget

This directory contains a minimal Django project demonstrating how to use the Django Pagination Widget.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run migrations:
```bash
python manage.py migrate
```

3. Create some sample data:
```bash
python manage.py shell -c "from example_app.models import Item; [Item.objects.create(name=f'Item {i}') for i in range(100)]"
```

4. Run the development server:
```bash
python manage.py runserver
```

5. Visit http://127.0.0.1:8000/ to see the pagination in action.

## Project Structure

- `example_project/` - Django project settings
- `example_app/` - Sample Django app with pagination
- `templates/` - HTML templates
- `static/` - Static files
