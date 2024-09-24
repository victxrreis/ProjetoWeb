public class Selb {
    public int Id { get; set; }
    public int PrinterId { get; set; }  //precisa mesmo do ID?
    public Printer? Printer { get; set; }
    public int TonnerId { get; set; } //precisa mesmo do ID?
    public Tonner? Tonner { get; set; }
    public string SelbValue { get; set; } //adicionei porque as Selbs sao string
    //precisa ter elas, e tipo um codigo da empresa que a gente pega as impressoras
    //entao coloquei esse atributo ai, serve quase como um id

    public Selb(int id, int printerId, int tonnerId, string selbValue) {
        Id = id;
        PrinterId = printerId;
        TonnerId = tonnerId;
        SelbValue = selbValue;
    }    
}
