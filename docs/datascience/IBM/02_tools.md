# Tools for Data Science

Before it can be useful, raw data must pass through **The Data Science Task categories**

- **Data Management.** Data is collected from many sources, retrieving data securely, efficiently and cost-effectively
- **Data Integration and Transformation.** Extract, Transform and Load data (ETL). Extract the data and save it in a central repository (data warehouse), transforming the values, structure and format of the data. Transformed data is loaded back to the data warehouse.
- **Data Visualization.** Graphical representation of data and information (charts, plots, maps and animations)
- **Model Building.** It is the step where you train the data and analyze patterns using suitable machine learning algorithms
- **Model Deployment.** Integrating a model into a production environment. Uses API's to enable data-based decisions
- **Model Monitoring and Assessment.** Run continuous quality checks to ensure a model's accuracy, fairness and robustness

## Open Source Tools for Data Science

### Data management

Open-source data management tools are relational databases like:
- MySQL
- PostgreSQL
- MongoDB
- Cassandra
- CouchDB
- Hadoop File System
- Ceph
- Elastic Search

### Data Integration and transformation

ETL, also termed Data Refinery and Cleansing, tools like:

- Apache Airflow
- Kubeflow
- Apache Kafka
- Apache nifi
- Spark SQL
- NodeRed

### Data visualization

- PixieDust
- Hue
- kibana
- Apache superset

### Model deployment

- PredictionIO
- Seldon
- mleap
- TensorFlow Serving
- TensorFlow lite
- TensorFlow.JS
- Kubernetes
- Redhad openshift

### Model monitoring and assessment

Tools to track performance to maintain outdated models

- ModelDB
- Prometheus
- AI Fairness 360 Open Source Toolkit
- Adversarial Robustness 360 Toolbox
- AI Explainability 360 toolkit

### Code asset management

- git
- Git Lab
- Bitbucket
- GitHUB

### Data asset management

- Apache Atlas
- ODPi Egeria
- Kylo

### IBM offers various tools and platforms tailored for model development across various domains

- **IBM Watson Studio:** Engineered as an integrated environment, Watson Studio simplifies developing, training, and deploying models. It boasts support for multiple languages and frameworks, such as Python, R, and TensorFlow, alongside collaboration features, data preparation tools, and versatile deployment options.

- **IBM AutoAI:** A notable feature embedded within Watson Studio, IBM AutoAI streamlines the machine learning model construction process. By dynamically exploring various algorithms and hyperparameters, it aims to identify the optimal model for a given dataset.

- **IBM Watson OpenScale:** As a platform for overseeing and managing AI models in production, Watson OpenScale plays a pivotal role in ensuring model fairness, explainability, and bias mitigation. It furnishes insights into model performance and drift over time, facilitating informed decision-making.

- **IBM Watson Machine Learning:** Watson Machine Learning, available as a service on the IBM Cloud platform, enables users to scale their training and deployment of machine learning models. It seamlessly supports popular frameworks like TensorFlow, PyTorch, and scikit-learn, and offers APIs for seamless integration with other applications.


### Development environments

- Jupyter. The most famous development environment for data science. Its a tool for interactive python programming. Its a combination of documentation, code, shell commands and visualization in a single documentation
- Jupyter lab. The next version of jupyter notebooks. Open different type of files, jupyter notebooks, data, terminals and then arrange them on the canvas.
- Apache Zeppelin. A similar experience of jupyter notebooks but has an integrated plotting capability
- R Studio. Runs R and all relationated libraries. Unifies programming, execution, debugging, remote data access, data exploration and visualization into one tool
- Spyder. Similar functionalities from R Studio but implemented with python

### Execution environments

Sometimes your data doesn't fit into a single storage or main memory capacity, it's recommended to use a cluster execution environment

- Apache Spark. 
- Apache Flink
- Ray

### Fully Integrated Visual Tools

Data integration and transformation + Data Visualization + Model Building

- Knime
- Orange


## Commercial tools for Data Science

### Data Management

- Oracle database
- SQL Server
- IBM DB2

### Data integration and transformation

Extract, Tranform and Load (ETL) tools

- Informatica PowerCenter
- IBM InfoSphere DataStage
- SAP
- Oracle
- SAS
- Talend
- Microsoft products

### Data Visualizaion

- Tableu
- PowerBI
- IBM Cognos Analytics

### Model Building

- SPSS Modeler
- Sas

### Model monitoring and code asset management

Model monitoring and the code asset management is a very new discipline, relevant commercial tools are no available.

### Data Asset Management

- Informatica Enterprise Data Governance

### Development environments

- IBM Watson Studio together with Watson Open Scale is a fully integrated tool covering the data sciencie life cycle


## Cloud Base Tools for Data Science

### Fully integrated visual tools and platforms

Large-scale execution of data science workflows happens in compute clusters

- Watson Studio and Watson OpenScale, cover the complete development life cycle for all data science, machine learning, and AI tasks.
- Azure Machine Learning. Fully cloud-hosted, supports the complete development life cycle of all data science.
- H2O Driverless AI

### Data management

- Amazon DynamoDB
- Cloudant
- IBM DB2

### Data Integration and transformation

- Informatica
- IBM Data Refinery

### Data Visualization

- Datameer
- IBM Cognos Analytics
- IBM Watson Studio

### Model Building

- IBM Watson Machine Learning
- Google Cloud

### Model deployment

- IBM Watson Machine Learning

### Model monitoring and assessment

- Amazon SageMaker Model Monitor
- Watson OpenScale


## Data Science tools summary

- Data Management Tools - Facilitates the storage, organization, and retrieval of data. Includes Relational Databases, NoSQL Databases, and Big Data platforms.
- Data Integration and Transformation Tools - Streamlines data pipelines and automate data processing workflows. Task of data integration and transformation in the classic data warehousing world is to Extract, Transform, and Load (ETL).
- Data Visualization Tools- Provides graphical representation of data and assist with communicating insights.
- Model Deployment, Monitoring and Assessment Tools- Supports the building, deploying, monitoring, and evaluation of data and machine learning models.
- Data Asset Management Tools- Organizes and manages data, enforce access controls, and ensure asset backups.
- Code Development and Execution Tools - ProvideS environments for developing, testing, and deploying code, offering computational resources to execute it.
- Code Asset Management Tools - Enables the storage and management of code, track changes, and support collaborative development