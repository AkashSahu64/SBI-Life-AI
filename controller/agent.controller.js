export async function getAgentDashboard(req, res) {
    res.json({
      totalCustomers: 120,
      pendingFollowUps: 18,
      highPriorityClients: 6,
    });
  }
  