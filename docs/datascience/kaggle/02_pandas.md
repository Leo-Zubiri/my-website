# Pandas

To use pandas, you'll typically start with the following line of code.

```py
import pandas as pd
```

There are two core objects in pandas: the **DataFrame** and the **Series**.

## Dataframe

A DataFrame is a table. It contains an array of individual entries, each of which has a certain value. Each entry corresponds to a row (or record) and a column.

```py
pd.DataFrame({'Yes': [50, 21], 'No': [131, 2]})
```

![](../img/kaggle_pandas_dataframe.png)

> DataFrame entries are not limited to integers.

```py
pd.DataFrame({'Bob': ['I liked it.', 'It was awful.'], 'Sue': ['Pretty good.', 'Bland.']})
```

![](../img/kaggle_pandas_dataframe2.png)


## Series

A Series, by contrast, is a sequence of data values. If a DataFrame is a table, a Series is a list. And in fact you can create one with nothing more than a list:

```py
pd.Series([1, 2, 3, 4, 5])
```

![](../img/kaggle_pandas_series.png)

> A Series is, in essence, a single column of a DataFrame. So you can assign row labels to the Series the same way as before, using an index parameter. However, a Series does not have a column name, it only has one overall name

```py
pd.Series([30, 35, 40], index=['2015 Sales', '2016 Sales', '2017 Sales'], name='Product A')
```

![](../img/kaggle_pandas_series2.png)


---

## Indexing, Selecting & Assigning

Selecting specific values of a pandas DataFrame or Series to work on is an implicit step in almost any data operation you'll run, so one of the first things you need to learn in working with data in Python is how to go about selecting the data points relevant to you quickly and effectively.


**reviews** dataframe:

![](../img/kaggle_pandas_dataframe3.png)


**These are the two ways of selecting a specific Series out of a DataFrame:**

Columns in a pandas DataFrame works like a property of an object by accessing it as an attribute

```py
reviews.country
```

An alternvative:

```py
reviews['country']
```


![](../img/kaggle_pandas_dataframe4.png)



To drill down to a single specific value, we need only use the indexing operator []:

```py
reviews['country'][0] #Italy
```
