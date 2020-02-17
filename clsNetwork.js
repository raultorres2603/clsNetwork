class clsNetwork {

    constructor(Vmethod, Vpath, Vasync) {
        this.method = Vmethod;
        this.path = Vpath;
        this.async = Vasync;

        this.xhttp = new XMLHttpRequest();
    }

    static help() {
        console.log("First of all, use the constructor passing this parammeters:");
        console.log("   - Method: GET or POST");
        console.log("   - Path: path/to/the/file.extension");
        console.log("   - Async: True or False");
        console.log("To return the response you can use:");
        console.log("   - clsNetwork.getXhttp()");
        console.log("Execute the sendRequest() in a interval of time:");
        console.log("   - clsNetwork.executePerTime(time) // GET METHOD");
        console.log("   - clsNetwork.executePerTime(string,time) // POST METHOD");
    }

    setMethod(Vmethod) {
        this.method = Vmethod;
    }

    getMethod() {
        return this.method;
    }

    setPath(Vpath) {
        this.path = Vpath;
    }

    getPath() {
        return this.path;
    }

    setAsync(Vasync) {
        this.async = Vasync;
    }

    getAsync() {
        return this.async;
    }

    getXhttp() {
        return this.xhttp;
    }

    setXhttp(Vxhttp) {
        this.xhttp = Vxhttp;
    }

    sendRequest(string) {
        if (this.getMethod() == "POST") {
            this.xhttp.open(this.getMethod(), this.getPath(), this.getAsync());
            this.xhttp.send(string);
            console.log("sendRequest(string)");
        } else {
            alert("ERROR IN CLSNETWORK");
        }
    }

    sendRequest() {
        if (this.getMethod() == "GET") {
            this.xhttp.open(this.getMethod(), this.getPath(), this.getAsync());
            this.xhttp.send();
            console.log("sendRequest()");
        } else {
            alert("ERROR IN CLSNETWORK");
        }
    }
    
    /*
    executePerTime(time) {
        this.loadingTimer = setTimeout(this.sendRequest(), time);
        console.log("executePerTime");
    }

    executePerTime(string,time) {
        this.loadingTimer = setTimeout(this.sendRequest(string), time);
        console.log("executePerTime");
    }
    */

}