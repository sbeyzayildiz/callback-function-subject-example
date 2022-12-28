class Subject {
    list = [];
    subscribe = (myFunction) => {
        this.list.push(myFunction);
        return () => {

            const myFunctionIndex = this.list.indexOf(myFunction);
            this.list.splice(myFunctionIndex,1);
        }
    };
    next = (e) => {
        for (const listItem of this.list) {
                listItem(e);
        }
    };
}

const sbj = new Subject();

// First Subscribe Start

sbj.subscribe((e) => console.log('hi ', e));

sbj.next('Ahmet');
sbj.next('Mehmet');

// Second Subscribe Start

const unsubscribe = sbj.subscribe((e) => console.log('hello ', e));

sbj.next('Veli');


// Second Subscribe End || Second Subscriber was unsubscribe!!
unsubscribe();

sbj.next('Osman');
