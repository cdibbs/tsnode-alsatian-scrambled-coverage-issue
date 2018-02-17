export class Something {

    method(): void {
        if ("asdf".indexOf("a") > 0) {
            return;
        } else if (new Date().toString() == "never") {
            console.log("you won a trip!");
            return;
        }

        console.log("another branch");
    }

}