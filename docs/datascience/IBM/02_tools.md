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