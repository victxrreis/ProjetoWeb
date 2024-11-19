public class Printer
{
    public int Id { get; set; }
    public string Ip { get; set; }
    public string Local { get; set; }
    public string Department { get; set; }
    public string Name { get; set; }

    public Printer(string ip, string local, string department, string name)
    {
        Ip = ip;
        Local = local;
        Department = department;
        Name = name;
    }
}