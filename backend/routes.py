from aiohttp.web import RouteTableDef, Response

routes = RouteTableDef()

@routes.get('/api/{dir}')
async def _edit(request):
    dir = request.match_info['dir']
    return Response(text=dir, content_type='text/plain')

