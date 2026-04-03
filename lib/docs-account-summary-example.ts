/** Example JSON for GET /account/summary */
export const EXAMPLE_ACCOUNT_SUMMARY_JSON = `{
  "full_name": "John Doe",
  "email": "user@example.com",
  "usage_summary": {
    "current_month": {
      "successful": 45,
      "failed": 2,
      "total": 47,
      "remaining": 55,
      "usage_percentage": 45.0,
      "month_start": "2024-01-01T00:00:00Z"
    },
    "all_time": {
      "total_successful": 150
    },
    "average_response_time_ms": 2345.67,
    "usage_by_key": [
      {
        "api_key__name": "My API Key",
        "count": 45
      }
    ]
  },
  "rate_limits": {
    "requests_per_minute": 60,
    "monthly_limit": 100
  },
  "plan_name": "free",
  "plan_display_name": "Free Plan",
  "plan_features": {
    "formats": ["png"],
    "custom_resolution": false,
    "full_page": false
  }
}`;
