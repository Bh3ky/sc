const LINKS = {
        resume: "https://drive.google.com/",
        love: "https://docs.google.com/"
    };
    
    function openLink(key) {
        if (LINKS[key]) {
        window.open(LINKS[key], "_blank", "noopener,noreferrer");
        }
    }
    
    window.openLink = openLink;