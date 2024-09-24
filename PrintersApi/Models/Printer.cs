public class Printer {  
    public int Id { get; set; }
    public string? Ip { get; set; }
    public string? Local { get; set; }
    public string? Setor { get; set; }
    public string? Nome { get; set; }
    public string SelbValue { get; set; } = string.Empty;//troquei a colecao pela string da selb

    public Printer(int id, string ip, string local, string setor, string nome, string selbValue) {
        Id = id;
        Ip = ip;
        Local = local;
        Setor = setor;
        Nome = nome;
        SelbValue = selbValue;
    }
}