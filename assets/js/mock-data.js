/* ============================================================================
   Mock Data for SaaS Data & Analytics Platform Prototypes
   ============================================================================ */

// Mock data to demonstrate analytics capabilities across the platform
// This would typically come from real integrations with QuickBooks, Bamboo HR, etc.

window.MockData = {

  // QuickBooks Financial Data
  financial: {
    revenue: {
      monthly: [
        { month: 'Jan 2024', amount: 45200, growth: 8.5 },
        { month: 'Feb 2024', amount: 48900, growth: 12.3 },
        { month: 'Mar 2024', amount: 52100, growth: 15.7 },
        { month: 'Apr 2024', amount: 49800, growth: 10.2 },
        { month: 'May 2024', amount: 53600, growth: 18.6 },
        { month: 'Jun 2024', amount: 56200, growth: 22.1 },
        { month: 'Jul 2024', amount: 58700, growth: 25.4 },
        { month: 'Aug 2024', amount: 54300, growth: 19.8 },
        { month: 'Sep 2024', amount: 57800, growth: 27.3 },
        { month: 'Oct 2024', amount: 61200, growth: 31.2 },
        { month: 'Nov 2024', amount: 59400, growth: 29.1 },
        { month: 'Dec 2024', amount: 47200, growth: 4.4 }
      ],
      quarterly: [
        { quarter: 'Q1 2024', amount: 146200, growth: 12.2 },
        { quarter: 'Q2 2024', amount: 159600, growth: 16.9 },
        { quarter: 'Q3 2024', amount: 170800, growth: 24.1 },
        { quarter: 'Q4 2024', amount: 167800, growth: 21.6 }
      ]
    },

    expenses: {
      categories: [
        { category: 'Payroll', amount: 234000, percentage: 45.2, trend: 'stable' },
        { category: 'Technology', amount: 89000, percentage: 17.2, trend: 'increasing' },
        { category: 'Marketing', amount: 67000, percentage: 12.9, trend: 'increasing' },
        { category: 'Office & Operations', amount: 45000, percentage: 8.7, trend: 'stable' },
        { category: 'Professional Services', amount: 34000, percentage: 6.6, trend: 'decreasing' },
        { category: 'Travel', amount: 18000, percentage: 3.5, trend: 'increasing' },
        { category: 'Other', amount: 30000, percentage: 5.9, trend: 'stable' }
      ],
      monthly: [
        { month: 'Jan 2024', amount: 38200 },
        { month: 'Feb 2024', amount: 41900 },
        { month: 'Mar 2024', amount: 39800 },
        { month: 'Apr 2024', amount: 42100 },
        { month: 'May 2024', amount: 44300 },
        { month: 'Jun 2024', amount: 43600 },
        { month: 'Jul 2024', amount: 45800 },
        { month: 'Aug 2024', amount: 42900 },
        { month: 'Sep 2024', amount: 44200 },
        { month: 'Oct 2024', amount: 46700 },
        { month: 'Nov 2024', amount: 45100 },
        { month: 'Dec 2024', amount: 23400 }
      ]
    },

    customers: [
      {
        id: 'CUST-001',
        name: 'Enterprise Solutions Ltd',
        revenue: 45600,
        invoices: 12,
        status: 'active',
        paymentTerms: 'Net 30',
        avgPaymentDays: 22,
        lastPayment: '2024-11-28'
      },
      {
        id: 'CUST-002',
        name: 'TechStart Inc',
        revenue: 32400,
        invoices: 18,
        status: 'active',
        paymentTerms: 'Net 15',
        avgPaymentDays: 12,
        lastPayment: '2024-12-01'
      },
      {
        id: 'CUST-003',
        name: 'Global Manufacturing Co',
        revenue: 78900,
        invoices: 24,
        status: 'active',
        paymentTerms: 'Net 45',
        avgPaymentDays: 31,
        lastPayment: '2024-11-25'
      },
      {
        id: 'CUST-004',
        name: 'Innovative Designs LLC',
        revenue: 23700,
        invoices: 8,
        status: 'overdue',
        paymentTerms: 'Net 30',
        avgPaymentDays: 45,
        lastPayment: '2024-10-15'
      }
    ],

    profitMargin: {
      current: 50.4,
      target: 52.0,
      previous: 47.8,
      trend: 'improving'
    },

    cashFlow: {
      inflow: 167800,
      outflow: 134500,
      net: 33300,
      forecast: [
        { month: 'Jan 2025', projected: 38200 },
        { month: 'Feb 2025', projected: 41500 },
        { month: 'Mar 2025', projected: 44800 }
      ]
    }
  },

  // Bamboo HR Employee Data
  hr: {
    employees: {
      total: 156,
      active: 152,
      onLeave: 4,
      newHires: 8,
      departures: 3,
      growth: 12.3
    },

    departments: [
      { name: 'Engineering', count: 45, budget: 4500000, avgSalary: 95000 },
      { name: 'Sales', count: 28, budget: 2380000, avgSalary: 85000 },
      { name: 'Marketing', count: 18, budget: 1440000, avgSalary: 80000 },
      { name: 'Customer Success', count: 22, budget: 1760000, avgSalary: 70000 },
      { name: 'Operations', count: 15, budget: 1050000, avgSalary: 70000 },
      { name: 'Finance', count: 12, budget: 960000, avgSalary: 80000 },
      { name: 'HR', count: 8, budget: 640000, avgSalary: 75000 },
      { name: 'Executive', count: 8, budget: 1600000, avgSalary: 200000 }
    ],

    payroll: {
      monthly: 1245600,
      quarterly: 3736800,
      annual: 14947200,
      benefits: 2242080,
      taxes: 2091568
    },

    performance: {
      averageRating: 4.2,
      highPerformers: 34,
      meetingExpectations: 98,
      needsImprovement: 18,
      reviewsCompleted: 89.7
    },

    retention: {
      rate: 94.2,
      averageTenure: 3.4,
      voluntaryTurnover: 8.1,
      topTalentRetention: 96.8
    },

    diversity: {
      gender: { male: 58.3, female: 41.7 },
      ethnicity: {
        'White': 45.2,
        'Asian': 28.1,
        'Hispanic/Latino': 12.8,
        'Black/African American': 8.7,
        'Other': 5.2
      },
      leadership: {
        diversityAtC: 37.5,
        diversityAtVP: 42.1,
        diversityAtDirector: 48.3
      }
    },

    recruiting: {
      openPositions: 23,
      candidatesInPipeline: 187,
      averageTimeToHire: 28,
      offerAcceptanceRate: 87.3,
      sourcingChannels: [
        { channel: 'Employee Referrals', hires: 12, percentage: 31.6 },
        { channel: 'LinkedIn', hires: 9, percentage: 23.7 },
        { channel: 'Company Website', hires: 7, percentage: 18.4 },
        { channel: 'Job Boards', hires: 6, percentage: 15.8 },
        { channel: 'Recruiting Firms', hires: 4, percentage: 10.5 }
      ]
    }
  },

  // AI Insights and Recommendations
  insights: [
    {
      id: 'INS-001',
      type: 'cost-optimization',
      priority: 'high',
      title: 'Reduce Software License Costs by 23%',
      description: 'AI analysis shows you\'re paying for 47 software licenses that haven\'t been used in the last 60 days.',
      impact: 'Save $2,847 monthly',
      confidence: 89,
      dataPoints: ['License usage logs', 'User activity data', 'Cost analysis'],
      recommendations: [
        'Cancel unused Slack Pro licenses (12 seats)',
        'Downgrade Adobe Creative Suite (8 unused seats)',
        'Review Microsoft Office 365 allocation'
      ],
      potentialSavings: 2847
    },
    {
      id: 'INS-002',
      type: 'revenue-growth',
      priority: 'medium',
      title: 'Customer Retention Opportunity in Enterprise Segment',
      description: 'Enterprise customers show 15% higher engagement with new features.',
      impact: 'Increase contract values by 12%',
      confidence: 76,
      dataPoints: ['Feature usage metrics', 'Customer engagement scores', 'Contract history'],
      recommendations: [
        'Launch targeted upselling campaign',
        'Offer premium support packages',
        'Create enterprise-specific features'
      ],
      potentialRevenue: 89400
    },
    {
      id: 'INS-003',
      type: 'operational-efficiency',
      priority: 'low',
      title: 'Optimize Invoice Processing Schedule',
      description: 'Invoices sent on Tuesdays have 8% higher on-time payment rates.',
      impact: 'Reduce payment delays by 2.3 days',
      confidence: 82,
      dataPoints: ['Payment history', 'Send time analysis', 'Customer behavior'],
      recommendations: [
        'Reschedule monthly invoices to Tuesdays',
        'Implement automated Tuesday sending',
        'A/B test optimal send times'
      ],
      efficiencyGain: '2.3 days faster payment'
    },
    {
      id: 'INS-004',
      type: 'predictive-analysis',
      priority: 'medium',
      title: 'Seasonal Demand Spike Predicted for March',
      description: 'Historical data shows 34% increase in demand during March.',
      impact: 'Prepare for 34% demand increase',
      confidence: 92,
      dataPoints: ['Historical sales data', 'Market indicators', 'Seasonal patterns'],
      recommendations: [
        'Increase inventory by 25%',
        'Scale support team temporarily',
        'Prepare marketing campaigns'
      ],
      preparationTime: '45 days'
    }
  ],

  // System and Platform Metrics
  platform: {
    tenants: {
      total: 347,
      active: 332,
      trial: 28,
      churned: 15,
      growth: 18.5
    },

    usage: {
      dataProcessed: '12.4 TB',
      reportsGenerated: 2847,
      apiCalls: 1250000,
      activeUsers: 8934,
      avgSessionTime: '24 minutes'
    },

    performance: {
      uptime: 99.97,
      responseTime: 145,
      errorRate: 0.03,
      satisfaction: 4.6
    },

    revenue: {
      mrr: 47200,
      arr: 566400,
      churn: 2.4,
      expansion: 112,
      cac: 1250,
      ltv: 15600
    }
  },

  // Sample Chart Data for Visualizations
  charts: {
    revenueGrowth: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Revenue',
        data: [45200, 48900, 52100, 49800, 53600, 56200, 58700, 54300, 57800, 61200, 59400, 47200],
        borderColor: '#1890ff',
        backgroundColor: 'rgba(24, 144, 255, 0.1)',
        tension: 0.4
      }]
    },

    departmentBudget: {
      labels: ['Engineering', 'Sales', 'Marketing', 'Customer Success', 'Operations', 'Finance', 'HR', 'Executive'],
      datasets: [{
        data: [4500000, 2380000, 1440000, 1760000, 1050000, 960000, 640000, 1600000],
        backgroundColor: [
          '#1890ff', '#52c41a', '#faad14', '#722ed1',
          '#eb2f96', '#13c2c2', '#fa541c', '#2f54eb'
        ]
      }]
    },

    customerSegments: {
      labels: ['Enterprise', 'Mid-Market', 'Small Business', 'Startup'],
      datasets: [{
        data: [45, 78, 142, 82],
        backgroundColor: ['#1890ff', '#52c41a', '#faad14', '#722ed1']
      }]
    }
  },

  // Utility Functions
  utils: {
    formatCurrency: function(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(amount);
    },

    formatPercentage: function(value) {
      return `${value.toFixed(1)}%`;
    },

    formatNumber: function(num) {
      return new Intl.NumberFormat('en-US').format(num);
    },

    getRandomData: function(count, min, max) {
      return Array.from({ length: count }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
      );
    },

    generateTimeSeriesData: function(months, baseValue, volatility = 0.1) {
      const data = [];
      let current = baseValue;

      for (let i = 0; i < months; i++) {
        const change = (Math.random() - 0.5) * volatility * current;
        current = Math.max(0, current + change);
        data.push(Math.round(current));
      }

      return data;
    }
  }
};

// Export for use in modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.MockData;
}