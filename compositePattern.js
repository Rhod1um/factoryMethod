//eriks eksempel som er taget fra nettet
//godt at kende, vi kommer med sikkerhed til at bruge det i vores karriere

//ting til fældes for foldere, samme navn, create date fx osv, så vil
//man lave nedarvning eller interface når de deler noget. Gøres ikke i dette eksempel
//også eksempel med ressourcer, brandstation har grupper af brandfolk som kan have over og undergrupper

//klasser er dokumenter/journaler fx lægejournal som kan have underskrift
//skriver man under på folderen skriver man under på alle dokumenter i folderen, skriver
//man under på dokuemnter er et kun det dokument

//rekursiv står man med det så skal man bruge dette pattern
class Document {
    constructor(title) {
        this.title = title
        this.signature = null
    }
    sign(signature) {
        this.signature = signature
    }
    out(){
        console.log(this) //udksirver objektet
    }
    remove(){
        this.parent.removeMe(this.title) //objekt skal bede parent om at blive slettet, kan ikke slette selv
    }
    remove(remtitle){ //fjern objekt baseret på title, får objekt frem for at bruge sig selv
        console.log("remove " + remtitle)
        this.parent.removeMe(remtitle)
    }
}

class DocumentComposite {
    constructor(title) {
        this.items = []
        if (title) {
            this.items.push(new Document(title))
        }
    }
    add(item) {
        this.items.push(item) //nu ved parent hvilken child den har. child kender også parent
        //god ide at lave pile/forhold begge veje
        this.items.push(item) //skriv altid this i objekters attributter, erik vil altid skrive det
    }
    sign(signature) {
        this.items.forEach(item => item.sign(signature))
    }
    out(){
        console.log(this)
        this.items.forEach(item => item.out()) //item kunne hedde hvad som helst, erik sagde d
        //item er kan både være folder eller dokument
    }
    removeMe(remtitle){
        console.log("removeMe " + remtitle)
        this.items = this.items.filter(item => item.title != remtitle)
    } //remove skal slette enkelt dokument eller alt der er inde i folderen hvis folder
    remove(remtitle){
        console.log("removeMe " + remtitle)
        this.items.forEach(item => item.remove(remtitle))
    }
}

//laver træ

const root = new DocumentComposite() //root folder
const develop = new DocumentComposite() //ny folder under root
const support = new DocumentComposite() //ny folder under root
root.add(develop)
root.add(support)

//dokuemnter som skal ind i folderene
const dev1 = new Document("dev1")
const dev2 = new Document("dev2")
develop.add(dev1)
develop.add(dev2)

const sup1 = new Document("sup1")
const sup2 = new Document("sup2")
support.add(sup1)
support.add(sup2)

root.out()

//nu kan man lægge slet på
