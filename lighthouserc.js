module.exports = {
    ci: {
        collect: {
            numberOfRuns: 1,
            url: [
                "https://habr.com/ru/feed/"
            ],
            settings: {
                //зашьем в переменные потом, сейчас не критично
                //extraHeaders: JSON.stringify({Cookie: 'dev_user_token="{\"user_id\":\"0d715aeb-95fa-40e7-b9dc-02a261d0e856\"\\054\"email\":\"org-a-admin@mail.ru\"}"'}),
                chromeFlags: '--no-sandbox --disable-dev-shm-usage --headless --in-process-gpu',
                preset: 'desktop',
                onlyCategories: ['performance'],
                maxWaitForLoad: 20000,
            }
        },
        upload: {
            target: "filesystem",
            //target: "temporary-public-storage",
            reportFilenamePattern: `lh-results-%%HOSTNAME%%-%%PATHNAME%%.%%EXTENSION%%`,
        }
    }

}