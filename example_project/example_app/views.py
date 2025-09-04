from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Item


def item_list(request):
    """View demonstrating pagination widget usage"""
    # Get all items
    items = Item.objects.all()

    # Paginate with 10 items per page
    paginator = Paginator(items, 2)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,
        'items': page_obj,  # For template iteration
    }

    return render(request, 'item_list.html', context)
