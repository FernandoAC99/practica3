let url = window.location.href
//cambiar practicas_cache por el tuyo
let swDirect = "/practicas_cache/sw.js"


if(navigator.serviceWorker){
    if(url.includes("localhost")){swDirect='/sw.js'}
    navigator.serviceWorker.register(swDirect);

}



if(window.caches){
    console.log("Habemus cache")

    caches.open('prueba')
    caches.open('prueba-v2')

    caches.has('prueba')
        .then((result)=>{
            console.log(result);
    })

    caches.open('cache-v1').then((cache)=>{
        //cache.add("/index.html");

        cache.addAll([
            '/practicas_cache/index.html',
            "/practicas_cache/css/pages.css",
            "/practicas_cache/img/prueba1.jpg",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        ]).then(()=>{
            //cache.delete('/css/page.css')
            //cache.put('index.html', new Response('Actualizado desde cache'))
        });

        cache.match('index.html')
            .then((res)=>{
                res.text().then((trxt)=>{console.log(trxt)})
                console.log(res)
            })
    })

    caches.keys()
        .then((keys)=>{
            console.log(keys)
        })
}
