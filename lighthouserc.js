module.exports = {
    ci: {
        collect: {
            numberOfRuns: 1,
            url: [
                // "http://localhost:3005/engineering/tasks",
                // "http://localhost:3005/engineering/projects",
                // "http://localhost:3005/engineering/filestore",
                // "http://localhost:3005/analytics",
                // "http://localhost:3005/gantt/projects",
                // "http://localhost:3005/control/defects",
                // "http://localhost:3005/status",
                // "http://localhost:3005/construction/projects",
                // "http://localhost:3005/management",
                // "http://localhost:3005/filestore"
                "https://www.etalongroup.ru/msk/",
                "https://www.etalongroup.ru/choose/"
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