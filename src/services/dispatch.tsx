export function GET<T>(url: string, resultName: string = "") {
  try {
    return fetch(url).then(async (resp) => {
      const apiResult = await resp.json();
      if (resp.ok) {
        return {
          code: resp.status,
          results: apiResult[resultName] as T,
          status: "success",
          errorMessage: "",
          limit: apiResult.limit,
          skip: apiResult.skip,
          total: apiResult.total,
        };
      } else {
        return {
          code: resp.status,
          results: apiResult[resultName] as T,
          status: "fail",
          errorMessage: "",
          limit: apiResult.limit,
          skip: apiResult.skip,
          total: apiResult.total,
        };
      }
    });
  } catch (error) {
    return {
       code: 500,
          results: [],
          status: "fail",
          errorMessage: "",
          limit: 0,
          skip: 0,
          total: 0,
    };
  }
}

export function POST<T>(url: string, data: T) {
  try {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (response) => {
      const apiResult = await response.json();
      if (response.ok) {
        return {
          code: response.status,
          status: "success",
          errorMessage: "",
          results: apiResult,
        };
      } else {
        return {
          code: response.status,
          status: "faile",
          errorMessage: response.statusText + " " + response.text,
          results: apiResult,
        };
      }
    });
  } catch (error) {
    return {
      errorMessage: error,
      status: "internale Error",
      code: 500,
    };
  }
}

export function PATCH<T>(url: string, data: T) {
  try {
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
    }).then(async (response) => {
      const apiResult = await response.json();
      if (response.ok) {
        return {
          code: response.status,
          status: "success",
          errorMessage: "",
          results: apiResult,
        };
      } else {
        return {
          code: response.status,
          status: "faile",
          errorMessage: response.statusText + " " + response.text,
          results: apiResult,
        };
      }
    });
  } catch (error) {
    return {
      errorMessage: error,
      status: "internale Error",
      code: 500,
    };
  }
}

export function DELETE(url: string) {
  try {
    return fetch(url).then(async (response) => {
      const apiResult = await response.json();
      if (response.ok) {
        return {
          results: [],
          code: 200,
          status: "success",
          errorMessage: "",
        };
      } else {
        return {
          results: [],
          code: 200,
          status: "fail",
          errorMessage: apiResult.errorMessage as string,
        };
      }
    });
  } catch (error) {
    return {
      errorMessage: error,
      status: "internale Error",
      code: 500,
    };
  }
}
