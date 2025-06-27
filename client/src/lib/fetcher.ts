'use server'

type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    headers?: Record<string, string>
    body?: any
    queryParams?: Record<string, string | number | boolean>
    cache?: RequestCache
    tags?: string[]
    revalidate?: number | false // For ISR / revalidation
}

export async function serverFetch<T>(
    path: string,
    {
        method = 'GET',
        headers = {},
        body,
        queryParams,
        cache = 'force-cache',
        tags,
        revalidate,
    }: FetchOptions = {}
): Promise<any> {
    const baseUrl = process.env.API_URL || 'http://localhost:5000'

    const queryString = queryParams
        ? '?' +
        Object.entries(queryParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&')
        : ''

    const fetchOptions: RequestInit & { next?: any } = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        cache,
        ...(body ? { body: JSON.stringify(body) } : {}),
    }

    if (typeof revalidate !== 'undefined' || tags?.length) {
        fetchOptions.next = {
            ...(revalidate !== undefined ? { revalidate } : {}),
            ...(tags ? { tags } : {}),
        }
    }

    try {
        const res = await fetch(`${baseUrl}${path}${queryString}`, fetchOptions)

        if (!res.ok) {
            const errorText = await res.text()
            throw new Error(`API Error (${res.status}): ${res.statusText} - ${errorText}`)
        }

        return await res.json()
    } catch (error) {
        console.error(`Fetch failed: ${baseUrl}${path}${queryString}`, error)
        return error
    }
}
