
export interface Specialization {
  name: string;
  technologies: string[];
}

export interface Role {
  role: string;
  specializations: Specialization[];
}

export interface RoleCategory {
  [category: string]: Role[];
}

export const allRoles: RoleCategory = {
  "Software_Development": [
    {
      "role": "Frontend_Developer",
      "specializations": [
        {
          "name": "JavaScript_Frameworks_and_Libraries",
          "technologies": ["React", "Angular", "Vue.js", "Svelte", "Preact", "Ember.js", "Solid.js", "jQuery"]
        },
        {
          "name": "JavaScript_Meta_Frameworks",
          "technologies": ["Next.js", "Nuxt.js", "Gatsby", "SvelteKit", "Remix", "Astro"]
        },
        {
          "name": "State_Management",
          "technologies": ["Redux", "MobX", "Zustand", "Recoil", "Pinia", "NgRx", "Vuex", "Context_API"]
        },
        {
          "name": "Styling_and_CSS_Frameworks",
          "technologies": ["CSS", "Sass", "Less", "Stylus", "Styled-Components", "Emotion", "Tailwind_CSS", "Bootstrap", "Material-UI", "Ant_Design", "Chakra_UI"]
        },
        {
          "name": "Build_Tools_and_Bundlers",
          "technologies": ["Webpack", "Vite", "Rollup", "Parcel", "Babel", "ESLint", "Prettier"]
        },
        {
          "name": "Testing_Libraries",
          "technologies": ["Jest", "Vitest", "Mocha", "Jasmine", "Cypress", "Playwright", "React_Testing_Library", "Storybook"]
        },
        {
          "name": "Static_Typing",
          "technologies": ["TypeScript", "Flow"]
        }
      ]
    },
    {
      "role": "Backend_Developer",
      "specializations": [
        {
          "name": "Node.js_Ecosystem",
          "technologies": ["Node.js", "Express.js", "NestJS", "Koa", "Fastify", "Hapi.js"]
        },
        {
          "name": "Python_Ecosystem",
          "technologies": ["Python", "Django", "Flask", "FastAPI", "Tornado"]
        },
        {
          "name": "Java_Ecosystem",
          "technologies": ["Java", "Spring_Boot", "Quarkus", "Micronaut", "Jakarta_EE"]
        },
        {
          "name": "PHP_Ecosystem",
          "technologies": ["PHP", "Laravel", "Symfony", "CodeIgniter"]
        },
        {
          "name": "Other_Languages_and_Frameworks",
          "technologies": ["Go", "Gin", "Ruby", "Ruby_on_Rails", "C#", ".NET", "Rust", "Actix_Web", "Elixir", "Phoenix"]
        },
        {
          "name": "API_Paradigms",
          "technologies": ["REST", "GraphQL", "gRPC", "WebSockets"]
        },
        {
          "name": "Databases",
          "technologies": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "MariaDB", "Oracle", "SQL_Server", "Elasticsearch", "DynamoDB", "Firebase_Firestore"]
        }
      ]
    },
    {
      "role": "Mobile_Developer",
      "specializations": [
        {
          "name": "Native_iOS",
          "technologies": ["Swift", "Objective-C", "SwiftUI", "UIKit", "Xcode", "Core_Data", "Realm"]
        },
        {
          "name": "Native_Android",
          "technologies": ["Kotlin", "Java", "Android_Studio", "Jetpack_Compose", "Android_SDK", "Room", "Dagger"]
        },
        {
          "name": "Cross_Platform",
          "technologies": ["React_Native", "Flutter", "Xamarin", "NativeScript", "Ionic", "Dart"]
        }
      ]
    },
    {
      "role": "DevOps_Engineer",
      "specializations": [
        {
          "name": "CI_CD_Tools",
          "technologies": ["Jenkins", "GitLab_CI", "GitHub_Actions", "CircleCI", "Travis_CI", "Azure_DevOps", "ArgoCD", "Spinnaker"]
        },
        {
          "name": "Infrastructure_as_Code",
          "technologies": ["Terraform", "Ansible", "Puppet", "Chef", "Pulumi", "AWS_CloudFormation"]
        },
        {
          "name": "Containerization_and_Orchestration",
          "technologies": ["Docker", "Kubernetes", "OpenShift", "Docker_Swarm", "Nomad", "Helm"]
        },
        {
          "name": "Cloud_Providers",
          "technologies": ["AWS", "Azure", "Google_Cloud_Platform_GCP", "DigitalOcean", "Heroku"]
        },
        {
          "name": "Monitoring_and_Logging",
          "technologies": ["Prometheus", "Grafana", "Datadog", "New_Relic", "Splunk", "ELK_Stack", "Loki"]
        }
      ]
    },
    {
      "role": "QA_Automation_Engineer",
      "specializations": [
        {
          "name": "Web_UI_Automation",
          "technologies": ["Selenium", "Cypress", "Playwright", "WebDriverIO"]
        },
        {
          "name": "API_Automation",
          "technologies": ["Postman", "Rest-Assured", "Karate", "SoapUI"]
        },
        {
          "name": "Mobile_Automation",
          "technologies": ["Appium", "Espresso", "XCUITest"]
        },
        {
          "name": "Performance_Testing",
          "technologies": ["JMeter", "Gatling", "k6", "LoadRunner"]
        },
        {
          "name": "Frameworks_and_Languages",
          "technologies": ["JUnit", "TestNG", "Pytest", "Mocha", "Cucumber", "SpecFlow"]
        }
      ]
    },
    {
      "role": "Embedded_Systems_Engineer",
      "specializations": [
        {
          "name": "Programming_Languages",
          "technologies": ["C", "C++", "Rust", "MicroPython", "Assembly"]
        },
        {
          "name": "Operating_Systems",
          "technologies": ["FreeRTOS", "Zephyr", "Embedded_Linux", "VxWorks", "QNX"]
        },
        {
          "name": "Hardware_Platforms",
          "technologies": ["Arduino", "Raspberry_Pi", "STM32", "ESP32", "ARM_Cortex"]
        }
      ]
    },
    {
      "role": "Game_Developer",
      "specializations": [
        {
          "name": "Game_Engines",
          "technologies": ["Unity", "Unreal_Engine", "Godot", "CryEngine"]
        },
        {
          "name": "Programming_Languages",
          "technologies": ["C++", "C#", "Blueprints_Visual_Scripting", "GDScript"]
        },
        {
          "name": "Graphics_APIs",
          "technologies": ["OpenGL", "DirectX", "Vulkan", "Metal"]
        }
      ]
    },
    {
      "role": "Blockchain_Developer",
      "specializations": [
        {
          "name": "Smart_Contract_Languages",
          "technologies": ["Solidity", "Vyper", "Rust"]
        },
        {
          "name": "Blockchain_Platforms",
          "technologies": ["Ethereum", "Solana", "Polygon", "Cardano", "Binance_Smart_Chain"]
        },
        {
          "name": "Development_Frameworks",
          "technologies": ["Truffle", "Hardhat", "Brownie", "Anchor"]
        }
      ]
    }
  ],
  "Cloud_Engineering": [
    {
      "role": "AWS_Cloud_Engineer",
      "specializations": [
        {
          "name": "Compute_Services",
          "technologies": ["AWS_EC2", "AWS_Lambda", "AWS_Elastic_Beanstalk", "AWS_Auto_Scaling", "AWS_Lightsail"]
        },
        {
          "name": "Storage_Services",
          "technologies": ["AWS_S3", "AWS_EBS", "AWS_EFS", "AWS_Glacier", "AWS_Storage_Gateway"]
        },
        {
          "name": "Networking_Services",
          "technologies": ["AWS_VPC", "Amazon_Route_53", "AWS_Direct_Connect", "AWS_API_Gateway", "AWS_Elastic_Load_Balancing"]
        },
        {
          "name": "Database_Services",
          "technologies": ["Amazon_RDS", "Amazon_Aurora", "Amazon_DynamoDB", "Amazon_ElastiCache", "Amazon_Redshift"]
        },
        {
          "name": "Container_Services",
          "technologies": ["Amazon_EKS", "Amazon_ECS", "AWS_Fargate", "Amazon_ECR"]
        },
        {
          "name": "Infrastructure_as_Code",
          "technologies": ["AWS_CloudFormation", "AWS_CDK", "Terraform", "Pulumi"]
        },
        {
          "name": "Security_and_Identity",
          "technologies": ["AWS_IAM", "AWS_KMS", "AWS_Security_Hub", "AWS_WAF", "AWS_Shield"]
        }
      ]
    },
    {
      "role": "Azure_Cloud_Engineer",
      "specializations": [
        {
          "name": "Compute_Services",
          "technologies": ["Azure_Virtual_Machines", "Azure_Functions", "Azure_App_Service", "Azure_VM_Scale_Sets"]
        },
        {
          "name": "Storage_Services",
          "technologies": ["Azure_Blob_Storage", "Azure_Disk_Storage", "Azure_Files", "Azure_Queue_Storage"]
        },
        {
          "name": "Networking_Services",
          "technologies": ["Azure_Virtual_Network", "Azure_DNS", "Azure_ExpressRoute", "Azure_API_Management", "Azure_Load_Balancer"]
        },
        {
          "name": "Database_Services",
          "technologies": ["Azure_SQL_Database", "Azure_Cosmos_DB", "Azure_Database_for_PostgreSQL", "Azure_Cache_for_Redis"]
        },
        {
          "name": "Container_Services",
          "technologies": ["Azure_Kubernetes_Service_AKS", "Azure_Container_Instances_ACI", "Azure_Container_Registry"]
        },
        {
          "name": "Infrastructure_as_Code",
          "technologies": ["Azure_Resource_Manager_ARM_Templates", "Azure_Bicep", "Terraform"]
        },
        {
          "name": "Security_and_Identity",
          "technologies": ["Azure_Active_Directory", "Azure_Key_Vault", "Microsoft_Defender_for_Cloud", "Azure_WAF"]
        }
      ]
    },
    {
      "role": "GCP_Cloud_Engineer",
      "specializations": [
        {
          "name": "Compute_Services",
          "technologies": ["Google_Compute_Engine", "Google_Cloud_Functions", "Google_App_Engine", "Managed_Instance_Groups"]
        },
        {
          "name": "Storage_Services",
          "technologies": ["Google_Cloud_Storage", "Persistent_Disk", "Filestore", "Cloud_Storage_for_Firebase"]
        },
        {
          "name": "Networking_Services",
          "technologies": ["Google_VPC_Network", "Google_Cloud_DNS", "Cloud_Interconnect", "Apigee_API_Management", "Google_Cloud_Load_Balancing"]
        },
        {
          "name": "Database_Services",
          "technologies": ["Google_Cloud_SQL", "Google_Cloud_Spanner", "Google_Bigtable", "Firestore", "Memorystore"]
        },
        {
          "name": "Container_Services",
          "technologies": ["Google_Kubernetes_Engine_GKE", "Google_Cloud_Run", "Google_Artifact_Registry"]
        },
        {
          "name": "Infrastructure_as_Code",
          "technologies": ["Google_Cloud_Deployment_Manager", "Terraform"]
        },
        {
          "name": "Security_and_Identity",
          "technologies": ["Google_Cloud_IAM", "Cloud_Key_Management_Service", "Google_Cloud_Armor"]
        }
      ]
    }
  ],
  "IT_Infrastructure_and_Systems": [
    {
      "role": "Linux_Systems_Administrator",
      "specializations": [
        {
          "name": "Operating_Systems",
          "technologies": ["Red_Hat_Enterprise_Linux_RHEL", "Ubuntu_Server", "CentOS", "SUSE_Linux_Enterprise_Server", "Debian"]
        },
        {
          "name": "Web_Servers",
          "technologies": ["Nginx", "Apache_HTTP_Server", "LiteSpeed", "Caddy"]
        },
        {
          "name": "Scripting_and_Automation",
          "technologies": ["Bash_Scripting", "Python", "Perl", "Cron"]
        },
        {
          "name": "Configuration_Management",
          "technologies": ["Ansible", "Puppet", "Chef", "SaltStack"]
        },
        {
          "name": "Monitoring",
          "technologies": ["Nagios", "Zabbix", "Prometheus", "Grafana", "Icinga"]
        }
      ]
    },
    {
      "role": "Windows_Server_Administrator",
      "specializations": [
        {
          "name": "Core_Services",
          "technologies": ["Active_Directory_Domain_Services", "DNS", "DHCP", "Group_Policy_GPO", "File_Services"]
        },
        {
          "name": "Scripting_and_Automation",
          "technologies": ["PowerShell", "PowerShell_Desired_State_Configuration_DSC"]
        },
        {
          "name": "Web_and_Application_Servers",
          "technologies": ["Internet_Information_Services_IIS", ".NET_Framework"]
        },
        {
          "name": "Update_and_Patch_Management",
          "technologies": ["Windows_Server_Update_Services_WSUS", "System_Center_Configuration_Manager_SCCM"]
        }
      ]
    },
    {
      "role": "Virtualization_Engineer",
      "specializations": [
        {
          "name": "Hypervisors_and_Platforms",
          "technologies": ["VMware_vSphere", "VMware_ESXi", "Microsoft_Hyper-V", "KVM", "Proxmox_VE", "Citrix_Hypervisor"]
        },
        {
          "name": "Management_Consoles",
          "technologies": ["VMware_vCenter_Server", "System_Center_Virtual_Machine_Manager_SCVMM", "oVirt"]
        },
        {
          "name": "Storage_and_Networking",
          "technologies": ["VMware_vSAN", "VMware_NSX", "Storage_Area_Networks_SAN", "Network_Attached_Storage_NAS"]
        }
      ]
    },
    {
      "role": "Network_Engineer",
      "specializations": [
        {
          "name": "Routing_and_Switching",
          "technologies": ["Cisco_IOS", "Juniper_Junos", "Arista_EOS", "BGP", "OSPF", "EIGRP", "VLANs", "STP"]
        },
        {
          "name": "Network_Firewalls_and_Security",
          "technologies": ["Palo_Alto_Networks", "Fortinet", "Cisco_ASA", "Check_Point", "Access_Control_Lists_ACLs", "VPNs"]
        },
        {
          "name": "Wireless_Networking",
          "technologies": ["Cisco_Wireless", "Aruba_Networks", "Ubiquiti_UniFi", "802.11ax_WiFi_6"]
        },
        {
          "name": "Network_Monitoring_and_Analysis",
          "technologies": ["Wireshark", "SolarWinds", "PRTG_Network_Monitor", "Zabbix", "Nagios", "NetFlow"]
        },
        {
          "name": "Network_Automation",
          "technologies": ["Ansible", "Python_Netmiko_Paramiko", "Puppet", "Cisco_DNA_Center"]
        }
      ]
    }
  ],
  "Cybersecurity": [
    {
      "role": "Cybersecurity_Analyst",
      "specializations": [
        {
          "name": "SIEM_and_Log_Management",
          "technologies": ["Splunk", "IBM_QRadar", "LogRhythm", "Microsoft_Sentinel", "Elastic_Stack_ELK", "Graylog"]
        },
        {
          "name": "Vulnerability_Management",
          "technologies": ["Nessus", "Qualys", "Rapid7_Nexpose", "OpenVAS", "Nmap"]
        },
        {
          "name": "Endpoint_Detection_and_Response_EDR",
          "technologies": ["CrowdStrike_Falcon", "SentinelOne", "Microsoft_Defender_for_Endpoint", "Carbon_Black"]
        },
        {
          "name": "Intrusion_Detection_and_Prevention_IDS_IPS",
          "technologies": ["Snort", "Suricata", "Zeek_Bro"]
        },
        {
          "name": "Threat_Intelligence_Platforms",
          "technologies": ["ThreatQuotient", "Anomali", "Recorded_Future"]
        }
      ]
    },
    {
      "role": "Security_Engineer",
      "specializations": [
        {
          "name": "Firewall_and_Network_Security",
          "technologies": ["Palo_Alto_Networks", "Fortinet", "Cisco_ASA", "Check_Point", "pfSense"]
        },
        {
          "name": "Identity_and_Access_Management_IAM",
          "technologies": ["Okta", "Azure_Active_Directory", "Ping_Identity", "Auth0", "SailPoint"]
        },
        {
          "name": "Cloud_Security",
          "technologies": ["AWS_Security_Hub", "Microsoft_Defender_for_Cloud", "Google_Security_Command_Center", "Wiz.io", "Prisma_Cloud"]
        },
        {
          "name": "Application_Security_AppSec",
          "technologies": ["SAST_Static_Application_Security_Testing", "DAST_Dynamic_Application_Security_Testing", "Veracode", "Checkmarx", "OWASP_ZAP"]
        }
      ]
    },
    {
      "role": "Penetration_Tester",
      "specializations": [
        {
          "name": "Toolkits_and_Frameworks",
          "technologies": ["Metasploit_Framework", "Cobalt_Strike", "Kali_Linux"]
        },
        {
          "name": "Web_Application_Testing",
          "technologies": ["Burp_Suite", "OWASP_ZAP", "sqlmap", "Nikto"]
        },
        {
          "name": "Network_and_Infrastructure_Testing",
          "technologies": ["Nmap", "Wireshark", "Aircrack-ng", "John_the_Ripper", "Hashcat"]
        }
      ]
    },
    {
      "role": "GRC_Analyst",
      "specializations": [
        {
          "name": "Compliance_Frameworks",
          "technologies": ["ISO_27001", "SOC_2", "NIST", "PCI_DSS", "HIPAA", "GDPR", "CCPA"]
        },
        {
          "name": "GRC_Platforms",
          "technologies": ["ServiceNow_GRC", "ZenGRC", "LogicGate", "AuditBoard"]
        }
      ]
    }
  ],
  "Database_Administration": [
    {
      "role": "Database_Administrator_DBA",
      "specializations": [
        {
          "name": "Relational_Databases_SQL",
          "technologies": ["PostgreSQL", "MySQL", "Microsoft_SQL_Server", "Oracle_Database", "MariaDB", "Amazon_RDS", "Azure_SQL"]
        },
        {
          "name": "NoSQL_Databases",
          "technologies": ["MongoDB", "Redis", "Cassandra", "Couchbase", "DynamoDB", "Cosmos_DB"]
        },
        {
          "name": "Data_Warehousing",
          "technologies": ["Snowflake", "Amazon_Redshift", "Google_BigQuery", "Teradata"]
        },
        {
          "name": "Backup_and_Recovery_Tools",
          "technologies": ["Veeam", "Commvault", "pg_dump", "RMAN"]
        },
        {
          "name": "Monitoring_and_Performance_Tuning",
          "technologies": ["pgAdmin", "MySQL_Workbench", "Oracle_Enterprise_Manager", "SolarWinds_Database_Performance_Analyzer"]
        }
      ]
    }
  ],
  "AI_and_Machine_Learning": [
    {
      "role": "Machine_Learning_Engineer",
      "specializations": [
        {
          "name": "Deep_Learning_Frameworks",
          "technologies": ["TensorFlow", "PyTorch", "Keras", "MXNet", "JAX"]
        },
        {
          "name": "Classical_ML_Libraries",
          "technologies": ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Statsmodels"]
        },
        {
          "name": "MLOps_Platforms",
          "technologies": ["Kubeflow", "MLflow", "Amazon_SageMaker", "Azure_Machine_Learning", "Google_AI_Platform", "Weights_&_Biases", "Comet.ml"]
        },
        {
          "name": "Data_Processing",
          "technologies": ["Pandas", "NumPy", "Dask", "Vaex", "Apache_Spark"]
        }
      ]
    },
    {
      "role": "Data_Scientist",
      "specializations": [
        {
          "name": "Data_Analysis_and_Visualization",
          "technologies": ["Python", "R", "SQL", "Tableau", "Power_BI", "Looker", "Matplotlib", "Seaborn", "Plotly", "ggplot2"]
        },
        {
          "name": "Experimentation_and_AB_Testing",
          "technologies": ["Optimizely", "VWO", "Google_Optimize", "Statsig"]
        },
        {
          "name": "Jupyter_Notebook_Ecosystem",
          "technologies": ["Jupyter_Notebook", "JupyterLab", "Google_Colab", "Deepnote"]
        }
      ]
    },
    {
      "role": "AI_Specialist",
      "specializations": [
        {
          "name": "Natural_Language_Processing_NLP",
          "technologies": ["Hugging_Face_Transformers", "spaCy", "NLTK", "Gensim", "BERT", "GPT-4", "LangChain"]
        },
        {
          "name": "Computer_Vision",
          "technologies": ["OpenCV", "Pillow", "YOLO", "Detectron2", "PyTorch_Vision"]
        },
        {
          "name": "Reinforcement_Learning",
          "technologies": ["OpenAI_Gym", "Stable_Baselines3", "Ray_RLlib"]
        }
      ]
    }
  ],
  "Data_Science_and_Engineering": [
    {
      "role": "Data_Engineer",
      "specializations": [
        {
          "name": "Data_Processing_and_ETL",
          "technologies": ["Apache_Spark", "Apache_Hadoop", "Apache_Flink", "dbt_Data_Build_Tool", "SQL"]
        },
        {
          "name": "Data_Warehousing",
          "technologies": ["Snowflake", "Google_BigQuery", "Amazon_Redshift", "Databricks_Lakehouse", "ClickHouse"]
        },
        {
          "name": "Data_Orchestration",
          "technologies": ["Apache_Airflow", "Prefect", "Dagster", "Luigi"]
        },
        {
          "name": "Streaming_Technologies",
          "technologies": ["Apache_Kafka", "Amazon_Kinesis", "Google_Cloud_Pub_Sub", "Spark_Streaming"]
        }
      ]
    },
    {
      "role": "Data_Analyst",
      "specializations": [
        {
          "name": "Business_Intelligence_Tools",
          "technologies": ["Tableau", "Power_BI", "Looker", "Qlik_Sense", "Metabase", "Superset"]
        },
        {
          "name": "Spreadsheet_Software",
          "technologies": ["Microsoft_Excel", "Google_Sheets"]
        },
        {
          "name": "Database_Querying",
          "technologies": ["SQL", "PostgreSQL", "MySQL", "SQL_Server"]
        }
      ]
    },
    {
      "role": "Analytics_Engineer",
      "specializations": [
        {
          "name": "Data_Modeling_and_Transformation",
          "technologies": ["dbt_Data_Build_Tool", "SQL", "Python"]
        },
        {
          "name": "Data_Warehouses",
          "technologies": ["Snowflake", "BigQuery", "Redshift"]
        },
        {
          "name": "Version_Control",
          "technologies": ["Git", "GitHub", "GitLab"]
        }
      ]
    }
  ],
  "Design_and_UX": [
    {
      "role": "UI_UX_Designer",
      "specializations": [
        {
          "name": "Design_and_Prototyping_Tools",
          "technologies": ["Figma", "Sketch", "Adobe_XD", "InVision", "Axure_RP", "Balsamiq", "Proto.io"]
        },
        {
          "name": "Graphic_Design_Software",
          "technologies": ["Adobe_Illustrator", "Adobe_Photoshop", "Affinity_Designer"]
        },
        {
          "name": "User_Research_and_Testing",
          "technologies": ["UserTesting.com", "Maze", "Lookback", "Hotjar", "Dovetail"]
        },
        {
          "name": "Collaboration_and_Hand-off",
          "technologies": ["Miro", "Zeplin", "Abstract", "Jira", "Confluence"]
        }
      ]
    }
  ],
  "Product_Management": [
    {
      "role": "Product_Manager",
      "specializations": [
        {
          "name": "Roadmapping_and_Strategy_Tools",
          "technologies": ["Aha!", "Productboard", "Roadmunk", "ProductPlan"]
        },
        {
          "name": "Project_Management_and_Collaboration",
          "technologies": ["Jira", "Trello", "Asana", "Linear", "ClickUp", "Monday.com", "Confluence", "Notion", "Slack"]
        },
        {
          "name": "Analytics_and_User_Behavior",
          "technologies": ["Amplitude", "Mixpanel", "Pendo", "Heap", "Google_Analytics", "FullStory"]
        },
        {
          "name": "User_Feedback_and_Surveys",
          "technologies": ["Canny", "UserVoice", "SurveyMonkey", "Typeform"]
        }
      ]
    }
  ]
};
