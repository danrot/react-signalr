using react_signalr.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSpaStaticFiles(configuration =>
{
	configuration.RootPath = "Client/dist";
});

builder.Services.AddSignalR();
builder.Services.AddSingleton<Random>();

var app = builder.Build();

app.UseSpaStaticFiles();
app.MapHub<RandomHub>("/RandomHub");

app.Run();
