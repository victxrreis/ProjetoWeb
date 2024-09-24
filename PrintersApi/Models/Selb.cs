public class Selb {
    public int Id { get; set; }
    public Printer? Printer { get; set; }
    public Tonner? Tonner { get; set; }
    public string SelbValue { get; set; } //adicionei porque as Selbs sao string
    //precisa ter elas, e tipo um codigo da empresa que a gente pega as impressoras
    //entao coloquei esse atributo ai, serve quase como um id

    public Selb() {

    }

    public Selb(int id, int printerId, int tonnerId, string selbValue) {
        Id = id;
        SelbValue = selbValue;
    }    
}