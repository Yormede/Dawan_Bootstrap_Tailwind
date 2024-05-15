const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show();
    })

    toastLiveExample.addEventListener('hide.bs.toast', function () {

        const nbReadToast = document.getElementById('nbReadToast');
        let nbToast = nbReadToast.innerHTML;

        nbReadToast.innerHTML = parseInt(nbToast) + 1;
    });
}
