import { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const greatExpectations: TechEntry = {
  name: "Great Expectations",
  category: "Data Engineering",
  categorySlug: "data-engineering-analytics",
  seo_title: "Hire Great Expectations Experts | TeamStation AI",
  meta_description:
    "Hire expert Great Expectations developers to build a robust data quality program. Get pre-vetted LATAM talent to ensure your data is always accurate, complete, and reliable.",
  intro:
    "Great Expectations is an open-source tool for data testing, documentation, and profiling. It helps data teams eliminate pipeline debt, through data testing, documentation, and profiling. Our data engineers use Great Expectations to build a culture of data quality and ensure that your data is always accurate, complete, and reliable.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Are you constantly fighting fires caused by bad data?",
      problem:
        "Your data pipelines are failing, your reports are inaccurate, and your machine learning models are producing garbage results. You are constantly in a reactive mode, trying to fix data quality issues after they have already impacted the business.",
      solution:
        "We use **Great Expectations to catch data quality issues before they enter your data warehouse**. We create a suite of data tests (called 'expectations') that are automatically run against your data as it moves through your pipelines. If the data fails a test, the pipeline is stopped, and you are notified immediately.",
      kpi: "Prevent 99% of data quality issues from reaching your production systems.",
    },
    {
      icon: AlertTriangle,
      pain: "Do you lack a shared understanding of what 'good data' looks like?",
      problem:
        "Your data producers and consumers have different assumptions about the data. There is no shared understanding of what the data means, what format it should be in, or what values are valid. This leads to confusion, mistrust, and a lot of wasted time.",
      solution:
        "We use **Great Expectations to create a living, executable data dictionary**. The expectations we create serve as a clear and unambiguous definition of what 'good data' looks like. This documentation is automatically generated and is always up-to-date, providing a single source of truth for your entire team.",
      kpi: "Create a shared understanding of your data and reduce data-related communication overhead by 80%.",
    },
    {
      icon: AlertTriangle,
      pain: "Is it difficult to monitor the quality of your data over time?",
      problem:
        "You have no way of knowing if the quality of your data is getting better or worse over time. You can't track key data quality metrics, and you can't identify trends or patterns in your data quality issues.",
      solution:
        "We use **Great Expectations' Data Docs to automatically generate a data quality report** every time your data is tested. This report includes a summary of the test results, as well as detailed information about any failures. We can also track data quality metrics over time, allowing you to see how the quality of your data is evolving.",
      kpi: "Gain complete visibility into the quality of your data and track your progress over time.",
    },
  ],
  evaluation: [
    "Deep expertise in Great Expectations and data quality best practices.",
    "Proven ability to design and implement a robust data testing program.",
    "Experience with integrating Great Expectations with a variety of data sources and pipeline orchestrators.",
    "Proficiency in creating custom expectations to meet specific business needs.",
  ],
  technical_analysis:
    "Great Expectations is a powerful tool for building a culture of data quality. Our engineers are experts at using Great Expectations to create and manage expectation suites. We have extensive experience with the full library of built-in expectations, and we are also experts at creating custom expectations to handle your specific business logic. We are highly skilled at integrating Great Expectations into your existing data pipelines, using tools like Airflow, dbt, and Spark. We can configure Great Expectations to run automatically as part of your pipeline, and we can set up notifications to alert you when data quality issues are detected. We also have experience with the different backends for storing expectation suites and validation results, including local filesystems, S3, and database backends. By combining our deep knowledge of Great Expectations with our expertise in data engineering, we can help you build a world-class data quality program that will ensure that your data is always accurate, complete, and reliable.",
  interlink_slugs: ["dbt", "datahub", "airflow", "data-governance"],
};

export default greatExpectations;
