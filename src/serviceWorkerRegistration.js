export default function serviceWorker() {
    let swURL = `${process.env.PUBLIC_URL}/serviceWorker.js`;
    navigator.serviceWorker.register(swURL).then((res)=>{
        console.warn("res", res);
    });
}