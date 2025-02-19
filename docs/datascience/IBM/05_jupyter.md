# Jupyter Notebooks and JupyterLab

## Jupyter Notebook

Jupyter Notebooks originated as **iPython**, originally for python programming. Actually, Jupyter stands for Julia, Python, R and many other languages

A Jupyter Notebook is a browser based application that allows you to create and share documents containing code, equations, visualizations, narrative text links and more. It is like a scientist's lab notebook where a scientist records all step to perform their experiments and the results they can reproduce.

A Jupyter notebook file allows you to combine descriptive text, code blocks, and code output in a single file. Finally you can export the notebook to a PDF, HTML file format to share with anyone.

## Jupyter Lab

It's a browser based application that allows you to access multiple jupyter notebooks files, other code, and data files. In addtion, it extends the functionalities of Jupyter Notebooks by enabling you to work with multiple notebooks, text editors, terminals, and custom components in a flexible, integrated, and extensible manner.

Jupyter Notebooks can be used with cloud based services like IBM and Google Colab.

> **Anaconda** is one of the popular distribution which includes Jupyter and Jupyter Lab, locally.


## Jupyter Kernels

A Kernel is a computational engine that executes the code contained in a Notebook file.

When a notebook document opens, the related kernel launches automatically, the kernel performs the computation and produce the results.

Depending on your settings you may need to install other notebooks languages in the jupyter environments.

## Jupyter Architecture

Implements a 2 process model.

- Process Model
  - Kernel. Executes the code and returns the results to the client for display
  - Client. Interface in the browser. Send code to the kernel.

Jupyter notebooks represent code, metadata, contents, and outputs

When you save the Notebook, it is sent from your browser to the notebook server. It saves the notebook on a disk as a json file wih a **.ipynb** extension

> The Jupyter Architecture uses the NB Convert tool to convert files to other formats. For example, convert a notebook into a HTML file, the notebook first it is modified by a preprocessor, then a exporter converts the notebook to the new file format. Finally, a postprocessor will work on the exported file to give the final output


## Aditional Jupyter Environments

Computational Notebooks. Combine code, computational output, explanatory text, and multimedia resources in a single document.

Popular tools for creating and modifying Jupyter Notebooks on a local device:
- JupyterLab. Open source web-based application
- VsCode

### Anaconda

Anaconda is an open-source distribution of Python and R programming languages that's used for: data science, machine learning, and artificial intelligence applications.

Anaconda is designed to work seamlessly with Jupyter Notebooks. Anaconda is used by data scientists, statisticians, and researchers. It's considered a platform of choice for the world's largest organizations. 

![](./img/anaconda.png)


## Aditional Cloud Based Jupyter Environments

Popular cloud-based environments used to create and modify Jupyter notebooks include:

- JupyterLite. Lightweight tool built from JupyterLab components, executes entirely in the browser.
  - https://jupyter.org/try-jupyter/lab/
- Google Colaboratory (GoogleColab). Free jupyter notebook environment. Store on Google Drive and GitHub
  - https://colab.research.google.com/

## Jupyter Notebooks on the Internet

It is important to notice that you can download such notebooks to your local computer or import them to a cloud based notebook tool so that you can rerun, modify, and apply what's explained in the notebook.

- https://github.com/jupyter/jupyter/wiki
- Sometimes, exist a link to the jupyter file (.ipynb), you can pick the URL and paste it to the NB Viewer
  - https://nbviewer.jupyter.org/
- First, you start with exploratory data analysis, for which this notebook is highly recommended: 
  - https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Exploratory_data_Analysis.ipynb
- For data integration/cleansing at a smaller scale, the python library_pandas_is often used. For this task, you can have a look at this notebook: 
  - https://towardsdatascience.com/data-cleaning-with-python-using-pandas-library-c6f4a68ea8eb
- If you want to know more about clustering, have a look at this notebook: 
  - https://nbviewer.jupyter.org/github/temporaer/tutorial_ml_gkbionics/blob/master/2%20-%20KMeans.ipynb
- And finally, if you want an in-depth notebook on the_iris_dataset, have a look at this: 
  - https://www.kaggle.com/lalitharajesh/iris-dataset-exploratory-data-analysis