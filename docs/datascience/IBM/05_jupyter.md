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