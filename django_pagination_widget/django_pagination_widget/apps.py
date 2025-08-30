from django.apps import AppConfig
from django.conf import settings


class DjangoPaginationWidgetConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'django_pagination_widget'
    verbose_name = 'Django Pagination Widget'

    def ready(self):
        """
        Initialize app settings and configurations.
        """
        # Set default settings if not already configured
        if not hasattr(settings, 'PAGINATION_WIDGET'):
            settings.PAGINATION_WIDGET = {}

        # Set default values for missing settings
        defaults = {
            'ENABLE_DARK_THEME': True,
        }

        for key, value in defaults.items():
            if key not in settings.PAGINATION_WIDGET:
                settings.PAGINATION_WIDGET[key] = value
