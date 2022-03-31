namespace react_signalr.Hubs;

using Microsoft.AspNetCore.SignalR;
using System;

public class RandomHub : Hub
{
	private Random Random { get; }

	public RandomHub(Random random)
	{
		Random = random;
	}

	public void GenerateNumber()
	{
		Clients.All.SendAsync("ReceiveNumber", Random.Next(0, 100));
	}
}
