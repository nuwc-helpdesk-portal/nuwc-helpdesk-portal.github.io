class WelcomeProgram extends Program {
    createWindow() {
        let body   = window.__welcomepage
        let wminfo = {
            title: 'Welcome!',
            name:  'Welcome!',
            icon:  'img/taskbar/WindowsFlagSmall.png',
        }

        return [wminfo, body]
    }

    onAttach() {
        this.getBodyHandle().classList.add('typography')

    }
}

window.pm.registerPrototype('welcome', WelcomeProgram)
