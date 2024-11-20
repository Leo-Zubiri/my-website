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

### Selecting

**reviews** dataframe:

![](../img/kaggle_pandas_dataframe3.png)


**These are the two ways of selecting a specific Series out of a DataFrame:**

Columns in a pandas DataFrame works like a property of an object by accessing it as an attribute

```py
reviews.country
```

An alternative:

```py
reviews['country']
```


![](../img/kaggle_pandas_dataframe4.png)



To drill down to a single specific value, we need only use the indexing operator []:

```py
reviews['country'][0] #Italy
```

### Indexing

Indexing a pandas dataframe means selecting particular subsets of data (such as rows, columns, individual cells) from that dataframe. Pandas has its own accessor operators, `loc` and `iloc`

---

`iloc` - **Index-based selection**. selecting data based on its numerical position in the data. To select the first row of data in a DataFrame:

```py
reviews.iloc[0]
```

> Both `loc` and `iloc` are row-first, column-second. This is the opposite of what we do in native Python, which is column-first, row-second. This means that it's marginally easier to retrieve rows, and marginally harder to get retrieve columns. To get a column with iloc:

```py
# All rows with only the first column
reviews.iloc[:, 0]

# select just the second and third entries
reviews.iloc[1:3, 0]

# It's also possible to pass a list:
reviews.iloc[[0, 1, 2], 0]

# the last five elements of the dataset
reviews.iloc[-5:]
```

---

`loc` - **Label-based selection**. It's the data index value, not its position, which matters.

```py
# First row only with column country
reviews.loc[0, 'country']

# One operation that's much easier using loc: Get a subset of all rows only with some specific columns
reviews.loc[:, ['taster_name', 'taster_twitter_handle', 'points']]
```

---

#### Choosing between `iloc` and `loc`

Its important consider some aspects of each method:

`iloc` uses the Python stdlib indexing scheme. The range may have exclusion details to consider: `iloc` range `0:10 includes 0,...,9` and `loc` range `0:10 includes 0,...,10`

> If we have a DataFrame with index values `Apples`, ..., `Potatoes`, ..., and we want to select "all the alphabetical fruit choices between `Apples` and `Potatoes`", then it's a lot more convenient to index `df.loc['Apples':'Potatoes']` than it is to index something like `df.loc['Apples', 'Potatoet']` (t coming after s in the alphabet).


#### Manipulating the index

 Critically, the index we use is not immutable. The `set_index()` method can be used to change it. This is useful if you can come up with an index for the dataset which is better than the current one

```py
reviews.set_index("title")
```

![](../img/kaggle_pandas_setindex.png)