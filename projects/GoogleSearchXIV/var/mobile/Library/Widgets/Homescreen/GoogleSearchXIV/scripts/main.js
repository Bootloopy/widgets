// GooglesearchXIV by Bootloopy
var searchBar = document.getElementById("searchBar");
var searchBackground = document.getElementById("searchBackground");
var searchBarIcon = document.getElementById("searchBarIcon");
var searchBarMicIcon = document.getElementById("searchBarMicIcon");
var searchBarBackgroundColor = config.searchbarcolor.length > 7 ? config.searchbarcolor.substring(0, 7) : config.searchbarcolor;
var searchBarTextColor = config.searchbartextcolor.length > 7 ? config.searchbartextcolor.substring(0, 7) : config.searchbartextcolor;
var searchBarPlaceholderTextColor = config.searchbarplaceholdertextcolor.length > 7 ? config.searchbarplaceholdertextcolor.substring(0, 7) : config.searchbarplaceholdertextcolor;
var searchBarIconColor = config.searchbariconcolor.length > 7 ? config.searchbariconcolor.substring(1, 7) : config.searchbariconcolor;
var searchBarMicIconColor = config.searchbarmiciconcolor.length > 7 ? config.searchbarmiciconcolor.substring(1, 7) : config.searchbarmiciconcolor;
//
function loadLogos() {
    searchBarIcon.src = base64SearchBarIcon;
    searchBarMicIcon.src = base64SearchBarMicIcon;
}
loadLogos();
//
var dynamicSearchBar;
var dynamicSearchBarLightBackgroundColor = config.lightsearchbarcolor.length > 7 ? config.lightsearchbarcolor.substring(0, 7) : config.lightsearchbarcolor;
var dynamicSearchBarDarkBackgroundColor = config.darksearchbarcolor.length > 7 ? config.darksearchbarcolor.substring(0, 7) : config.darksearchbarcolor;
var dynamicSearchBarLightTextColor = config.lightsearchbartextcolor.length > 7 ? config.lightsearchbartextcolor.substring(0, 7) : config.lightsearchbartextcolor;
var dynamicSearchBarDarkTextColor = config.darksearchbartextcolor.length > 7 ? config.darksearchbartextcolor.substring(0, 7) : config.darksearchbartextcolor;
var dynamicSearchBarLightPlaceholderTextColor = config.lightsearchbarplaceholdertextcolor.length > 7 ? config.lightsearchbarplaceholdertextcolor.substring(0, 7) : config.lightsearchbarplaceholdertextcolor;
var dynamicSearchBarDarkPlaceholderTextColor = config.darksearchbarplaceholdertextcolor.length > 7 ? config.darksearchbarplaceholdertextcolor.substring(0, 7) : config.darksearchbarplaceholdertextcolor;
var dynamicLightSearchBarIconColor = config.lightsearchbariconcolor.length > 7 ? config.lightsearchbariconcolor.substring(1, 7) : config.lightsearchbariconcolor;
var dynamicDarkSearchBarIconColor = config.darksearchbariconcolor.length > 7 ? config.darksearchbariconcolor.substring(1, 7) : config.darksearchbariconcolor;
var dynamicLightSearchBarMicIconColor = config.lightsearchbarmiciconcolor.length > 7 ? config.lightsearchbarmiciconcolor.substring(1, 7) : config.lightsearchbarmiciconcolor;
var dynamicDarkSearchBarMicIconColor = config.darksearchbarmiciconcolor.length > 7 ? config.darksearchbarmiciconcolor.substring(1, 7) : config.darksearchbarmiciconcolor;
//
var searchBarOpacity = (config.searchbaropacity * Math.pow(10, 2));
var searchBarBlur = (config.searchbarblur * Math.pow(10, 2)) / 10;
//
searchBackground.style.webkitFilter = `opacity(${searchBarOpacity}%)`;
searchBackground.style.webkitBackdropFilter = `blur(${searchBarBlur}px)`;

window.onkeyup = keyup;

var inputTextValue;

function keyup(e) {
    inputTextValue = e.target.value;

    if (e.keyCode == 13) {
        var correctValue = inputTextValue.replace(/\s+/g, '+');
        window.location = "https://www.google.com/search?q=" + correctValue;
        setTimeout(function() {
            document.getElementById("searchBar").value = "";
        }, 1000);
    }
}

function tappedOnLogo() {
    setTimeout(function() {
        document.getElementById("searchBar").value = "";
    }, 1000);
    window.location = "https://google.com";
}

searchBarIcon.addEventListener("touchstart", tappedOnLogo);

function tappedOnMic() {
    setTimeout(function() {
        document.getElementById("searchBar").value = "";
    }, 1000);
    api.apps.launchApplication("com.google.OPA");
}

searchBarMicIcon.addEventListener("touchstart", tappedOnMic);

if (config.dynamiccolorswitch == true) {

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDynamicDarkBar();
    } else {
        setDynamicLightBar();
    }

    dynamicSearchBar = window.matchMedia("(prefers-color-scheme: dark)");
    dynamicSearchBar.addListener(e => {
        if (e.matches) {
            setDynamicDarkBar();
        } else {
            setDynamicLightBar();
        }
    });
} else {
    setDefaultBar();
}

function setDynamicLightBar() {
    searchBackground.style.backgroundColor = dynamicSearchBarLightBackgroundColor;
    searchBar.style.color = dynamicSearchBarLightTextColor;
    searchBar.style.setProperty("--placeholder-color", dynamicSearchBarLightPlaceholderTextColor);

    if (config.usedynamicsearchbariconcolor == true) {
        setTimeout(function() {
            setLightSearchBarIconColor();
        }, 100);
    } else {
        searchBarIcon.src = base64SearchBarIcon;
    }

    if (config.usedynamicsearchbarmiciconcolor == true) {
        setTimeout(function() {
            setLightSearchBarMicIconColor();
        }, 100);
    } else {
        searchBarMicIcon.src = base64SearchBarMicIcon;
    }
}

function setDynamicDarkBar() {
    searchBackground.style.backgroundColor = dynamicSearchBarDarkBackgroundColor;
    searchBar.style.color = dynamicSearchBarDarkTextColor;
    searchBar.style.setProperty("--placeholder-color", dynamicSearchBarDarkPlaceholderTextColor);

    if (config.usedynamicsearchbariconcolor == true) {
        setTimeout(function() {
            setDarkSearchBarIconColor();
        }, 100);
    } else {
        searchBarIcon.src = base64SearchBarIcon;
    }

    if (config.usedynamicsearchbarmiciconcolor == true) {
        setTimeout(function() {
            setDarkSearchBarMicIconColor();
        }, 100);
    } else {
        searchBarMicIcon.src = base64SearchBarMicIcon;
    }
}

function setDefaultBar() {
    searchBackground.style.backgroundColor = searchBarBackgroundColor;
    searchBar.style.color = searchBarTextColor;
    searchBar.style.setProperty("--placeholder-color", searchBarPlaceholderTextColor);

    if (config.usesearchbariconcolor == true) {
        setTimeout(function() {
            setSearchBarIconColor();
        }, 100);
    } else {
        searchBarIcon.src = base64SearchBarIcon;
    }

    if (config.usesearchbarmiciconcolor == true) {
        setTimeout(function() {
            setSearchBarMicIconColor();
        }, 100);
    } else {
        searchBarMicIcon.src = base64SearchBarMicIcon;
    }
}

function hexToRGB(hexColor) {
    return {
        red: (hexColor >> 16) & 0xFF,
        green: (hexColor >> 8) & 0xFF,
        blue: hexColor & 0xFF,
    }
}

function setSearchBarIconColor() {
    var color = ("0x" + searchBarIconColor);
    var {
        red,
        green,
        blue
    } = hexToRGB(color);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    image = searchBarIcon;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(0, 0, 500, 500),
        picture = imageData.data,
        rgb = [red, green, blue];

    for (var i = 0, n = picture.length; i < n; i += 4) {
        picture[i] = rgb[0];
        picture[i + 1] = rgb[1];
        picture[i + 2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
    searchBarIcon.src = canvas.toDataURL("image/png");
}

function setSearchBarMicIconColor() {
    var color = ("0x" + searchBarMicIconColor);
    var {
        red,
        green,
        blue
    } = hexToRGB(color);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 717;
    image = searchBarMicIcon;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(0, 0, 500, 717),
        picture = imageData.data,
        rgb = [red, green, blue];

    for (var i = 0, n = picture.length; i < n; i += 4) {
        picture[i] = rgb[0];
        picture[i + 1] = rgb[1];
        picture[i + 2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
    searchBarMicIcon.src = canvas.toDataURL("image/png");
}

function setLightSearchBarIconColor() {
    var color = ("0x" + dynamicLightSearchBarIconColor);
    var {
        red,
        green,
        blue
    } = hexToRGB(color);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    image = searchBarIcon;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(0, 0, 500, 500),
        picture = imageData.data,
        rgb = [red, green, blue];

    for (var i = 0, n = picture.length; i < n; i += 4) {
        picture[i] = rgb[0];
        picture[i + 1] = rgb[1];
        picture[i + 2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
    searchBarIcon.src = canvas.toDataURL("image/png");
}

function setLightSearchBarMicIconColor() {
    var color = ("0x" + dynamicLightSearchBarMicIconColor);
    var {
        red,
        green,
        blue
    } = hexToRGB(color);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 717;
    image = searchBarMicIcon;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(0, 0, 500, 717),
        picture = imageData.data,
        rgb = [red, green, blue];

    for (var i = 0, n = picture.length; i < n; i += 4) {
        picture[i] = rgb[0];
        picture[i + 1] = rgb[1];
        picture[i + 2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
    searchBarMicIcon.src = canvas.toDataURL("image/png");
}

function setDarkSearchBarIconColor() {
    var color = ("0x" + dynamicDarkSearchBarIconColor);
    var {
        red,
        green,
        blue
    } = hexToRGB(color);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    image = searchBarIcon;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(0, 0, 500, 500),
        picture = imageData.data,
        rgb = [red, green, blue];

    for (var i = 0, n = picture.length; i < n; i += 4) {
        picture[i] = rgb[0];
        picture[i + 1] = rgb[1];
        picture[i + 2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
    searchBarIcon.src = canvas.toDataURL("image/png");
}

function setDarkSearchBarMicIconColor() {
    var color = ("0x" + dynamicDarkSearchBarMicIconColor);
    var {
        red,
        green,
        blue
    } = hexToRGB(color);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 717;
    image = searchBarMicIcon;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(0, 0, 500, 717),
        picture = imageData.data,
        rgb = [red, green, blue];

    for (var i = 0, n = picture.length; i < n; i += 4) {
        picture[i] = rgb[0];
        picture[i + 1] = rgb[1];
        picture[i + 2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
    searchBarMicIcon.src = canvas.toDataURL("image/png");
}